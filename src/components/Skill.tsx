import { FC, PropsWithChildren } from "react";
import { TSkill } from "../skills";

import { Character, useCharacter, useCharacterDispatch } from "../characterContext";
import SkillLine from "./SkillLine";

type TSkillProps = PropsWithChildren & { skill: TSkill; iconClassName?: string };

const Skill: FC<TSkillProps> = ({ skill, iconClassName = "" }) => {
  const character = useCharacter();
  const dispatch = useCharacterDispatch();

  const hasLearntSkill = character.skills.includes(skill.id);
  const hasRequiredLevel = character.level >= skill.level;
  const meetsRequirements = skill.requires ? skill.requires?.every((s) => character.skills.includes(s)) : true;

  const outerIconSrc = buildOuterIconSrc(character, skill);
  const innerIconSrc = buildInnerIconSrc(character, skill);
  const bottomIconSrc = buildBottomIconSrc(character, skill);

  const handleClick = () => {
    if (character.level < skill.level || !meetsRequirements) return;

    dispatch({ type: !hasLearntSkill ? "addSkill" : "removeSkill", skill: skill.id });
  };

  const textColor = !meetsRequirements || (!hasLearntSkill && !hasRequiredLevel) ? "text-disabled" : "";
  const skillSize = skill.level == 3 ? "h-14" : "h-10";

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        {/* 
          set large width to ensure text fits within one line
          however if set too large, will create a visual bug with the class selection menu 
        */}
        <div className={`w-28 text-center`}>
          <span className={`uppercase font-bold text-[9px] ${textColor}`}>{skill.name}</span>
        </div>

        <div className={iconClassName}>
          <div className={`${skill.id} relative ${skillSize}`} onClick={handleClick}>
            <img src={outerIconSrc} alt={skill.name} className="w-full h-full" />
            {!hasLearntSkill && skill.cost > 0 && (
              <span
                className={`absolute w-full h-full left-0 top-0 flex items-center justify-center select-none ${textColor}`}
              >
                {skill.cost}XP
              </span>
            )}

            {hasLearntSkill && innerIconSrc && (
              <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <img src={innerIconSrc} alt={skill.name} className="h-6" />
              </span>
            )}
          </div>
        </div>

        <div>
          <img src={bottomIconSrc} alt={skill.name} className="h-4" />
        </div>
      </div>

      {skill.requires?.map((otherSkill) => <SkillLine key={otherSkill} from={otherSkill} to={skill.id} />)}
    </>
  );
};

const buildOuterIconSrc = (character: Character, skill: TSkill) => {
  const hasRequiredLevel = character.level >= skill.level;

  const folder = hasRequiredLevel ? character.class!.toLowerCase() : "common";
  const icon = skill.auto ? "auto" : skill.level == 3 ? "level3" : "default";
  const suffix = hasRequiredLevel ? "" : "-disabled";

  return `/trees/${folder}/${icon}${suffix}.png`;
};

const buildInnerIconSrc = (character: Character, skill: TSkill) => {
  if (skill.auto) return "";

  return `/trees/${character.class!.toLowerCase()}/filled.png`;
};

const buildBottomIconSrc = (character: Character, skill: TSkill) => {
  const hasRequiredLevel = character.level >= skill.level;
  const hasLearntSkill = character.skills.includes(skill.id);
  const meetsRequirements = skill.requires ? skill.requires?.every((s) => character.skills.includes(s)) : true;

  const disabled = !meetsRequirements || (!hasLearntSkill && !hasRequiredLevel);

  return `/trees/${character.class!.toLowerCase()}/skills/${skill.id}${disabled ? "-disabled" : ""}.png`;
};

export default Skill;
