import { FC, PropsWithChildren, useEffect, useState } from "react";
import { TSkill } from "../skills";

// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../tailwind.config";
import { Character, useCharacter, useCharacterDispatch } from "../characterContext";
import LineTo from "react-lineto";

// const fullConfig = resolveConfig(tailwindConfig);

type TSkillProps = PropsWithChildren & { skill: TSkill };

const Skill: FC<TSkillProps> = ({ skill }) => {
  const character = useCharacter();
  const dispatch = useCharacterDispatch();

  const hasLearntSkill = character.skills.includes(skill.id);
  const hasRequiredLevel = character.level >= skill.level;
  const meetsRequirements = skill.requires ? skill.requires?.every((s) => character.skills.includes(s)) : true;

  const outerIconSrc = buildOuterIconSrc(character, skill);
  const innerIconSrc = buildInnerIconSrc(character, skill);

  const [showRequirements, setShowRequirements] = useState(false);
  useEffect(() => setShowRequirements(true), []);

  const handleClick = () => {
    if (character.level < skill.level || !meetsRequirements) return;

    dispatch({ type: !hasLearntSkill ? "addSkill" : "removeSkill", skill: skill.id });
  };

  const textColor = !meetsRequirements || (!hasLearntSkill && !hasRequiredLevel) ? "text-disabled" : "";
  const skillSize = skill.level == 3 ? "h-14" : "h-10";

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div>
          <span className={`uppercase text-[9px] ${textColor}`}>{skill.name}</span>
        </div>

        <div className={`${skill.id} relative ${skillSize}`} onClick={handleClick}>
          <img src={outerIconSrc} alt={skill.name} className="w-full h-full" />
          {!hasLearntSkill && skill.cost > 0 && (
            <span className={`absolute w-full h-full left-0 top-0 flex items-center justify-center ${textColor}`}>
              {skill.cost}XP
            </span>
          )}

          {hasLearntSkill && innerIconSrc && (
            <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <img src={innerIconSrc} alt={skill.name} className="h-6" />
            </span>
          )}
        </div>

        <div>
          <img
            src={`/trees/knight/skills/${skill.id}${
              !meetsRequirements || (!hasLearntSkill && !hasRequiredLevel) ? "-disabled" : ""
            }.png`}
            alt={skill.name}
            className="h-4"
          />
        </div>
      </div>

      {showRequirements &&
        skill.requires?.map((otherSkill) => {
          const fromNode = document.getElementsByClassName(`${otherSkill}`)[0];
          const toNode = document.getElementsByClassName(`${skill.id}`)[0];

          const diff = fromNode.getBoundingClientRect().y - toNode.getBoundingClientRect().y;

          const offset = 15;

          let anchorLeft = 45;
          let anchorRight = 45;

          if (diff > 0) {
            anchorLeft -= offset;
            anchorRight += offset;
          }
          if (diff < 0) {
            anchorLeft += offset;
            anchorRight -= offset;
          }

          const meetsRequirements = character.skills.includes(otherSkill);

          // const color = meetsRequirements ? (fullConfig.theme!.colors!["knight-skill"] as string) : "#C1C1C1";
          const color = meetsRequirements ? "#78B3A3" : "#C1C1C1";

          return (
            <div key={otherSkill} className="absolute">
              <LineTo
                from={`${otherSkill}`}
                fromAnchor={`103 ${anchorLeft}`}
                to={`${skill.id}`}
                toAnchor={`-3 ${anchorRight}`}
                delay={100}
                borderWidth={3}
                borderColor={color}
              />
            </div>
          );
        })}
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

export default Skill;
