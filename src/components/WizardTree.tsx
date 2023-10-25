import { FC } from "react";
import Skill from "./Skill";
import { WizardSkills } from "../skills";
import { Container } from "@pixi/react";
import StatisticsLabel from "./trees/StatisticsLabel";
import MerchantLabel from "./trees/MerchantLabel";
import BattleLabel from "./trees/BattleLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import SkillLine from "./SkillLine";

const WizardTree: FC = () => {
  const cols = [110, 375, 640];

  return (
    <Container y={20}>
      <StatisticsLabel />

      <Container y={110}>
        <Skill skill={WizardSkills[0]} x={cols[0]} />
        <Skill skill={WizardSkills[1]} x={cols[1]} />
      </Container>

      <Container y={280}>
        <Skill skill={WizardSkills[2]} x={cols[0]} />
        <Skill skill={WizardSkills[3]} x={cols[1]} />
      </Container>

      <Container y={430}>
        <MerchantLabel />
        <BattleLabel x={520} />
      </Container>

      <Container y={540}>
        <Skill skill={WizardSkills[4]} x={cols[0]} />
        <Skill skill={WizardSkills[5]} x={cols[2]} />
      </Container>

      <ExplorationLabel y={670} />

      <Container y={790}>
        <Skill skill={WizardSkills[6]} x={cols[0]} />
        <Skill skill={WizardSkills[7]} x={cols[1]} />
        <Skill skill={WizardSkills[9]} x={cols[2]} />
      </Container>

      <Container y={1020}>
        <Skill skill={WizardSkills[8]} x={cols[1]} bottomIconOffset={-65} />
        <Skill skill={WizardSkills[10]} x={cols[2]} />
      </Container>

      <Container y={1270}>
        <Skill skill={WizardSkills[11]} x={cols[2]} />
      </Container>

      <SkillLine from={1} to={2} />
      <SkillLine from={3} to={4} />
      <SkillLine from={7} to={8} />
      <SkillLine from={9} to={10} fromAnchor={0.33} />
      <SkillLine from={9} to={11} />
      <SkillLine from={9} to={12} fromAnchor={0.66} />
    </Container>
  );
};

export default WizardTree;
