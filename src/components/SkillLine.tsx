import { FC } from "react";
import { Character, useCharacter } from "../characterContext";
import { Graphics, useApp } from "@pixi/react";
import * as PIXI from "pixi.js";

type TProps = {
  from: number;
  to: number;
  fromAnchor?: number;
  toAnchor?: number;
};

const trees: Record<Exclude<Character["class"], undefined>, string> = {
  Knight: "#78B3A3",
  Healer: "#D85A4A",
  Wizard: "#D29147",
  Rogue: "#A1738C",
};

const SkillLine: FC<TProps> = ({ from, to, fromAnchor = 0.5, toAnchor = 0.5 }) => {
  const character = useCharacter();
  const app = useApp();

  const fromNode = app.stage.getChildByName(from.toString(), true) as PIXI.Sprite;
  const toNode = app.stage.getChildByName(to.toString(), true) as PIXI.Sprite;

  const meetsRequirements = character.skills.includes(from);

  const color = meetsRequirements ? trees[character.class!] : "#C1C1C1";

  const draw = (g: PIXI.Graphics) => {
    g.clear();

    if (fromNode && toNode) {
      const fromPosition = getGlobalPosition(fromNode);
      const toPosition = getGlobalPosition(toNode);

      g.lineStyle(5, color, 1);
      g.moveTo(
        fromPosition.x + fromNode.width / 2 + 3,
        fromPosition.y - fromNode.height / 2 + fromNode.height * fromAnchor,
      );
      g.lineTo(toPosition.x - toNode.width / 2 - 3, toPosition.y - toNode.height / 2 + toNode.height * toAnchor);
    }
  };

  return <Graphics draw={draw} />;
};

const getGlobalPosition = (obj: PIXI.Sprite): { x: number; y: number } => {
  let x = obj.x;
  let y = obj.y;

  let currentObj = obj.parent;

  while (currentObj != null) {
    x += currentObj.x;
    y += currentObj.y;

    currentObj = currentObj.parent;
  }

  return { x, y };
};

export default SkillLine;
