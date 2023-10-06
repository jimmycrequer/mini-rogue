import { KnightSkills } from "./skills";
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
    case "changeClass":
      return {
        class: character.class != action.class ? action.class : undefined,
        level: 1,
        gainedXP: 0,
        usedXP: 0,
        skills: [],
      };

    case "incrementXP": {
      if (!character.class) return character;

      const newGainedXP = Math.min(character.gainedXP + 1, 23);
      const newLevel = computeLevel(newGainedXP);
      const skills =
        character.level != newLevel
          ? [
              ...character.skills,
              ...KnightSkills.filter((skill) => skill.level == newLevel && skill.auto).map((s) => s.id),
            ]
          : character.skills;

      return {
        ...character,
        gainedXP: newGainedXP,
        level: newLevel,
        skills,
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

      const skill = KnightSkills.find((s) => s.id == action.skill)!;

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

      const skill = KnightSkills.find((s) => s.id == action.skill)!;

      return {
        ...character,
        usedXP: character.usedXP - skill.cost,
        skills: character.skills.filter((s) => s != action.skill),
      };
    }
  }
};

const initialCharacter: Character = {
  class: undefined, // "Knight",
  level: 1,
  gainedXP: 0,
  usedXP: 0,
  skills: [], // KnightSkills.filter((skill) => skill.level == 2 && skill.auto).map((s) => s.id),
};

const computeLevel = (points: number) => {
  if (points >= 18) return 3;

  if (points >= 6) return 2;

  return 1;
};
