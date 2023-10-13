import { HealerSkills, KnightSkills, RogueSkills, TSkill, WizardSkills } from "./skills";
import { FC, PropsWithChildren, createContext, useContext, useReducer, Dispatch } from "react";

export type Character = {
  class: "Knight" | "Wizard" | "Healer" | "Rogue" | undefined;
  level: number;
  gainedXP: number;
  usedXP: number;
  skills: number[];
};

export type Action =
  | { type: "changeClass"; class: Character["class"] }
  | { type: "incrementXP" }
  | { type: "decrementXP" }
  | { type: "addSkill"; skill: number }
  | { type: "removeSkill"; skill: number };

export const skills: Record<Exclude<Character["class"], undefined>, TSkill[]> = {
  Knight: KnightSkills,
  Healer: HealerSkills,
  Wizard: WizardSkills,
  Rogue: RogueSkills,
};

const CharacterContext = createContext<Character>({} as Character);
const CharacterDispatchContext = createContext<Dispatch<Action>>({} as Dispatch<Action>);

export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [character, dispatch] = useReducer(characterReducer, initialCharacter);

  return (
    <CharacterContext.Provider value={character}>
      <CharacterDispatchContext.Provider value={dispatch}>{children}</CharacterDispatchContext.Provider>
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);
export const useCharacterDispatch = () => useContext(CharacterDispatchContext);

const characterReducer = (character: Character, action: Action): Character => {
  switch (action.type) {
    case "changeClass": {
      const newSkills = action.class
        ? skills[action.class].filter((skill) => skill.level == 1 && skill.auto).map((s) => s.id)
        : [];

      return {
        class: action.class,
        level: 1,
        gainedXP: 0,
        usedXP: 0,
        skills: newSkills,
      };
    }

    case "incrementXP": {
      if (!character.class) return character;

      const newGainedXP = Math.min(character.gainedXP + 1, 23);
      const newLevel = computeLevel(newGainedXP);
      const newSkills =
        character.level != newLevel
          ? [
              ...character.skills,
              ...skills[character.class].filter((skill) => skill.level == newLevel && skill.auto).map((s) => s.id),
            ]
          : character.skills;

      return {
        ...character,
        gainedXP: newGainedXP,
        level: newLevel,
        skills: newSkills,
      };
    }

    case "decrementXP": {
      if (!character.class) return character;

      const newGainedXP = Math.max(character.gainedXP - 1, 0);
      const newLevel = computeLevel(newGainedXP);

      return {
        ...character,
        gainedXP: newGainedXP,
        level: newLevel,
      };
    }

    case "addSkill": {
      if (character.skills.includes(action.skill)) {
        return character;
      }

      const skill = skills[character.class!].find((s) => s.id == action.skill)!;

      return {
        ...character,
        usedXP: character.usedXP + skill.cost,
        skills: [...character.skills, action.skill],
      };
    }

    case "removeSkill": {
      if (!character.skills.includes(action.skill)) {
        return character;
      }

      const skill = skills[character.class!].find((s) => s.id == action.skill)!;

      // prevent removing auto skill
      if (skill.auto) {
        return character;
      }

      const dependantSkills = skills[character.class!]
        .filter((skill) => skill.requires?.includes(action.skill))
        .map((s) => s.id);
      const dependantDeepSkills = skills[character.class!]
        .filter((skill) => skill.requires?.some((s) => dependantSkills.includes(s)))
        .map((s) => s.id);

      // when removing a skill, also remove all skills that requires it
      // (also for other skills that requires any skill above)
      const newSkills = character.skills.filter((s) => {
        if (s == action.skill) return false;

        if (dependantSkills.includes(s)) return false;
        if (dependantDeepSkills.includes(s)) return false;

        return true;
      });

      // make sure usedXP is calculated from the remaining skills
      // because there is a probability to remove multiple skills at the same time
      const newUsedXP = newSkills.reduce(
        (sum, curr) => sum + skills[character.class!].find((skill) => skill.id == curr)!.cost,
        0,
      );

      return {
        ...character,
        usedXP: newUsedXP,
        skills: newSkills,
      };
    }
  }
};

const initialCharacter: Character = {
  class: undefined,
  level: 1,
  gainedXP: 0,
  usedXP: 0,
  skills: [],
};

const computeLevel = (points: number) => {
  if (points >= 18) return 3;

  if (points >= 6) return 2;

  return 1;
};
