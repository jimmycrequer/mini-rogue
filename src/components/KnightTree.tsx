import { FC, useEffect, useState } from "react";
import Skill from "./Skill";
import { KnightSkills } from "../skills";
import { Container } from "@pixi/react";
import MerchantLabel from "./trees/MerchantLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import BattleLabel from "./trees/BattleLabel";
import SkillLine from "./SkillLine";
import * as PIXI from "pixi.js";

const commonTreeAssets = [
  "/trees/common/auto-disabled.png",
  "/trees/common/default-disabled.png",
  "/trees/common/level3-disabled.png",
  "/trees/common/combat.png",
  "/trees/common/exploration.png",
  "/trees/common/marchand.png",
  "/trees/common/statistiques.png",
];

const knightTreeAssets = [
  "/trees/knight/auto.png",
  "/trees/knight/default.png",
  "/trees/knight/filled.png",
  "/trees/knight/level3.png",
];

const knightSkillAssets = [
  "/trees/knight/skills/1.png",
  "/trees/knight/skills/1-disabled.png",
  "/trees/knight/skills/2.png",
  "/trees/knight/skills/2-disabled.png",
  "/trees/knight/skills/3.png",
  "/trees/knight/skills/4.png",
  "/trees/knight/skills/4-disabled.png",
  "/trees/knight/skills/5.png",
  "/trees/knight/skills/5-disabled.png",
  "/trees/knight/skills/6.png",
  "/trees/knight/skills/6-disabled.png",
  "/trees/knight/skills/7.png",
  "/trees/knight/skills/7-disabled.png",
  "/trees/knight/skills/8.png",
  "/trees/knight/skills/8-disabled.png",
  "/trees/knight/skills/9.png",
  "/trees/knight/skills/9-disabled.png",
  "/trees/knight/skills/10.png",
  "/trees/knight/skills/10-disabled.png",
  "/trees/knight/skills/11.png",
  "/trees/knight/skills/11-disabled.png",
  "/trees/knight/skills/12.png",
  "/trees/knight/skills/12-disabled.png",
  "/trees/knight/skills/13.png",
  "/trees/knight/skills/13-disabled.png",
  "/trees/knight/skills/14.png",
  "/trees/knight/skills/14-disabled.png",
];

const KnightTree: FC = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  useEffect(() => {
    PIXI.Assets.load([...commonTreeAssets, ...knightTreeAssets, ...knightSkillAssets]).finally(() => {
      setAssetsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (assetsLoaded) setShowRequirements(true);
  }, [assetsLoaded]);

  if (!assetsLoaded) return null;

  const cols = [120, 370, 630];

  return (
    <Container>
      <MerchantLabel y={20} />

      <Container y={130}>
        <Skill skill={KnightSkills[0]} x={cols[0]} />
        <Skill skill={KnightSkills[1]} x={cols[1]} />
      </Container>

      <ExplorationLabel y={290} />

      <Container y={400}>
        <Skill skill={KnightSkills[2]} x={cols[0]} />
        <Skill skill={KnightSkills[3]} x={cols[1]} />
        <Skill skill={KnightSkills[4]} x={cols[2]} />
      </Container>

      <Container y={590}>
        <Skill skill={KnightSkills[5]} x={cols[0]} />
        <Skill skill={KnightSkills[6]} x={cols[1]} />
      </Container>

      <BattleLabel y={750} />

      <Skill skill={KnightSkills[7]} x={cols[0]} y={860} />
      <Skill skill={KnightSkills[9]} x={cols[0]} y={1070} />
      <Skill skill={KnightSkills[12]} x={cols[0]} y={1270} />

      <Skill skill={KnightSkills[8]} x={cols[1]} y={800} />
      <Skill skill={KnightSkills[10]} x={cols[1]} y={1070} />

      <Skill skill={KnightSkills[11]} x={cols[2]} y={950} />
      <Skill skill={KnightSkills[13]} x={cols[2]} y={1180} />

      {showRequirements && (
        <Container>
          <SkillLine from={6} to={7} />
          <SkillLine from={8} to={9} fromAnchor={0.33} />
          <SkillLine from={8} to={12} fromAnchor={0.66} toAnchor={0.33} />
          <SkillLine from={10} to={11} />
          <SkillLine from={11} to={12} fromAnchor={0.33} toAnchor={0.66} />
          <SkillLine from={11} to={14} fromAnchor={0.66} toAnchor={0.33} />
          <SkillLine from={13} to={14} fromAnchor={0.33} toAnchor={0.66} />
        </Container>
      )}
    </Container>
  );
};

export default KnightTree;
