import { FC, PropsWithChildren } from "react";
import { TSkill } from "../skills";
import { Container, Sprite, Text } from "@pixi/react";
import * as PIXI from "pixi.js";

import { Character, useCharacter, useCharacterDispatch } from "../characterContext";

type TSkillProps = PropsWithChildren & {
  skill: TSkill;
  x?: number;
  y?: number;
  additionalLabel?: string;
  labelPosition?: "top" | "left";
  bottomIconOffset?: number;
};

const Skill: FC<TSkillProps> = ({
  skill,
  x = 0,
  y = 0,
  additionalLabel,
  labelPosition = "top",
  bottomIconOffset = 0,
}) => {
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

  const labelX = labelPosition == "top" ? 0 : -40;
  const labelY = labelPosition == "top" ? -52 : 0;
  const labelAnchor: [number, number] = labelPosition == "top" ? [0.5, 0.5] : [1, 0.5];

  const textColor = !meetsRequirements || (!hasLearntSkill && !hasRequiredLevel) ? "#C1C1C1" : "#000000";

  return (
    <Container x={x} y={y}>
      <Text
        text={`${skill.name.toUpperCase()}${additionalLabel ? "\n" + additionalLabel : ""}`}
        x={labelX}
        y={labelY}
        anchor={labelAnchor}
        style={new PIXI.TextStyle({ fill: textColor, align: "right", fontWeight: "bold", fontSize: 22 })}
      />
      <Sprite
        name={skill.id.toString()}
        image={outerIconSrc}
        interactive
        anchor={[0.5, 0.5]}
        onpointertap={handleClick}
      />

      {hasLearntSkill && innerIconSrc && <Sprite image={innerIconSrc} anchor={[0.5, 0.5]} />}

      {!hasLearntSkill && skill.cost > 0 && (
        <Text text={`${skill.cost}XP`} anchor={[0.5, 0.5]} style={new PIXI.TextStyle({ fill: textColor })} />
      )}

      <Sprite image={bottomIconSrc} x={bottomIconOffset} y={40} anchor={[0.5, 0]} />
    </Container>
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
