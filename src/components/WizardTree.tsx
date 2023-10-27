import { FC, useEffect, useState } from "react";
import Skill from "./Skill";
import { WizardSkills } from "../skills";
import { Container } from "@pixi/react";
import StatisticsLabel from "./trees/StatisticsLabel";
import MerchantLabel from "./trees/MerchantLabel";
import BattleLabel from "./trees/BattleLabel";
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

const wizardTreeAssets = [
  "/trees/wizard/auto.png",
  "/trees/wizard/default.png",
  "/trees/wizard/filled.png",
  "/trees/wizard/level3.png",
];

const wizardSkillAssets = [
  "/trees/wizard/skills/1.png",
  "/trees/wizard/skills/1-disabled.png",
  "/trees/wizard/skills/2.png",
  "/trees/wizard/skills/2-disabled.png",
  "/trees/wizard/skills/3.png",
  "/trees/wizard/skills/3-disabled.png",
  "/trees/wizard/skills/4.png",
  "/trees/wizard/skills/4-disabled.png",
  "/trees/wizard/skills/5.png",
  "/trees/wizard/skills/5-disabled.png",
  "/trees/wizard/skills/6.png",
  "/trees/wizard/skills/6-disabled.png",
  "/trees/wizard/skills/7.png",
  "/trees/wizard/skills/7-disabled.png",
  "/trees/wizard/skills/8.png",
  "/trees/wizard/skills/8-disabled.png",
  "/trees/wizard/skills/9.png",
  "/trees/wizard/skills/9-disabled.png",
  "/trees/wizard/skills/10.png",
  "/trees/wizard/skills/10-disabled.png",
  "/trees/wizard/skills/11.png",
  "/trees/wizard/skills/11-disabled.png",
  "/trees/wizard/skills/12.png",
  "/trees/wizard/skills/12-disabled.png",
];

const WizardTree: FC = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  useEffect(() => {
    PIXI.Assets.load([...commonTreeAssets, ...wizardTreeAssets, ...wizardSkillAssets]).finally(() => {
      setAssetsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (assetsLoaded) setShowRequirements(true);
  }, [assetsLoaded]);

  if (!assetsLoaded) return null;

  const cols = [110, 375, 640];

  return (
    <Container>
      <StatisticsLabel y={20} />

      <Container y={130}>
        <Skill skill={WizardSkills[0]} x={cols[0]} />
        <Skill skill={WizardSkills[1]} x={cols[1]} />
      </Container>

      <Container y={300}>
        <Skill skill={WizardSkills[2]} x={cols[0]} />
        <Skill skill={WizardSkills[3]} x={cols[1]} />
      </Container>

      <Container y={450}>
        <MerchantLabel />
        <BattleLabel x={520} />
      </Container>

      <Container y={560}>
        <Skill skill={WizardSkills[4]} x={cols[0]} />
        <Skill skill={WizardSkills[5]} x={cols[2]} />
      </Container>

      <ExplorationLabel y={690} />

      <Container y={810}>
        <Skill skill={WizardSkills[6]} x={cols[0]} />
        <Skill skill={WizardSkills[7]} x={cols[1]} />
        <Skill skill={WizardSkills[9]} x={cols[2]} />
      </Container>

      <Container y={1040}>
        <Skill skill={WizardSkills[8]} x={cols[1]} bottomIconOffset={-65} />
        <Skill skill={WizardSkills[10]} x={cols[2]} />
      </Container>

      <Container y={1290}>
        <Skill skill={WizardSkills[11]} x={cols[2]} />
      </Container>

      {showRequirements && (
        <Container>
          <SkillLine from={1} to={2} />
          <SkillLine from={3} to={4} />
          <SkillLine from={7} to={8} />
          <SkillLine from={9} to={10} fromAnchor={0.33} />
          <SkillLine from={9} to={11} />
          <SkillLine from={9} to={12} fromAnchor={0.66} />
        </Container>
      )}
    </Container>
  );
};

export default WizardTree;
