import { FC, useEffect, useState } from "react";
import Skill from "./Skill";
import { HealerSkills } from "../skills";
import { Container } from "@pixi/react";
import MerchantLabel from "./trees/MerchantLabel";
import StatisticsLabel from "./trees/StatisticsLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
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

const healerTreeAssets = [
  "/trees/healer/auto.png",
  "/trees/healer/default.png",
  "/trees/healer/filled.png",
  "/trees/healer/level3.png",
];

const healerSkillAssets = [
  "/trees/healer/skills/1.png",
  "/trees/healer/skills/1-disabled.png",
  "/trees/healer/skills/2.png",
  "/trees/healer/skills/2-disabled.png",
  "/trees/healer/skills/3.png",
  "/trees/healer/skills/3-disabled.png",
  "/trees/healer/skills/4.png",
  "/trees/healer/skills/4-disabled.png",
  "/trees/healer/skills/5.png",
  "/trees/healer/skills/5-disabled.png",
  "/trees/healer/skills/6.png",
  "/trees/healer/skills/7.png",
  "/trees/healer/skills/7-disabled.png",
  "/trees/healer/skills/8.png",
  "/trees/healer/skills/8-disabled.png",
  "/trees/healer/skills/9.png",
  "/trees/healer/skills/9-disabled.png",
  "/trees/healer/skills/10.png",
  "/trees/healer/skills/10-disabled.png",
  "/trees/healer/skills/11.png",
  "/trees/healer/skills/11-disabled.png",
  "/trees/healer/skills/12.png",
  "/trees/healer/skills/12-disabled.png",
  "/trees/healer/skills/13.png",
  "/trees/healer/skills/13-disabled.png",
];

const HealerTree: FC = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  useEffect(() => {
    PIXI.Assets.load([...commonTreeAssets, ...healerTreeAssets, ...healerSkillAssets]).finally(() => {
      setAssetsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (assetsLoaded) setShowRequirements(true);
  }, [assetsLoaded]);

  if (!assetsLoaded) return null;

  const cols = [100, 350, 610];

  return (
    <Container>
      <MerchantLabel y={20} />

      <Container y={130}>
        <Skill skill={HealerSkills[0]} x={cols[0]} />
        <Skill skill={HealerSkills[1]} x={cols[1]} />
      </Container>

      <StatisticsLabel y={290} />

      <Container y={400}>
        <Skill skill={HealerSkills[2]} x={cols[0]} />
        <Skill skill={HealerSkills[3]} x={cols[1]} />
      </Container>

      <Skill skill={HealerSkills[4]} x={cols[0]} y={590} />

      <ExplorationLabel y={760} />

      <Container y={890}>
        <Skill skill={HealerSkills[5]} x={cols[0]} />
        <Skill skill={HealerSkills[6]} x={cols[1]} />
        <Skill skill={HealerSkills[7]} x={cols[2]} />
      </Container>

      <Container y={1080}>
        <Skill skill={HealerSkills[9]} x={cols[1]} />
        <Skill skill={HealerSkills[10]} x={cols[2]} />
      </Container>

      <Skill skill={HealerSkills[8]} x={cols[0]} y={1170} />

      <Container y={1270}>
        <Skill skill={HealerSkills[11]} x={cols[1]} />
        <Skill skill={HealerSkills[12]} x={cols[2]} bottomIconOffset={-20} />
      </Container>

      {showRequirements && (
        <Container>
          <SkillLine from={3} to={4} />
          <SkillLine from={9} to={10} fromAnchor={0.33} />
          <SkillLine from={9} to={12} fromAnchor={0.66} />
          <SkillLine from={10} to={11} />
          <SkillLine from={12} to={13} />
        </Container>
      )}
    </Container>
  );
};

export default HealerTree;
