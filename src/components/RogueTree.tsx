import { FC } from "react";
import { RogueSkills } from "../skills";
import Skill from "./Skill";
import { Container } from "@pixi/react";
import BattleLabel from "./trees/BattleLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import MerchantLabel from "./trees/MerchantLabel";
import StatisticsLabel from "./trees/StatisticsLabel";
import SkillLine from "./SkillLine";

const RogueTree: FC = () => {
  const cols = [80, 360, 640];

  return (
    <Container y={20}>
      <BattleLabel />
      <StatisticsLabel x={260} />

      <Container y={110}>
        <Skill skill={RogueSkills[0]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[1]} x={cols[1]} y={0} />
      </Container>

      <MerchantLabel y={250} />

      <Container y={350}>
        <Skill skill={RogueSkills[2]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[3]} x={cols[1]} y={0} />
        <Skill skill={RogueSkills[4]} x={cols[2]} y={0} />
      </Container>

      <ExplorationLabel y={500} />

      <Container y={610}>
        <Skill skill={RogueSkills[5]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[8]} x={cols[2]} y={0} />
      </Container>

      <Skill skill={RogueSkills[7]} x={cols[1]} y={710} />

      <Container y={810}>
        <Skill skill={RogueSkills[6]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[9]} x={cols[2]} y={0} />
      </Container>

      <Container y={960} x={-60}>
        <Skill skill={RogueSkills[10]} x={cols[1]} y={0} labelPosition="left" additionalLabel="(en combat)" />
        <Skill skill={RogueSkills[11]} x={cols[1]} y={120} labelPosition="left" additionalLabel="(en combat)" />
        <Skill skill={RogueSkills[12]} x={cols[1]} y={240} labelPosition="left" additionalLabel="(chez le marchand)" />
        <Skill skill={RogueSkills[13]} x={cols[1]} y={360} labelPosition="left" additionalLabel="(en exploration)" />

        <Skill skill={RogueSkills[14]} x={cols[2]} y={180} />
        <Skill skill={RogueSkills[15]} x={cols[2]} y={360} />
      </Container>

      <SkillLine from={3} to={4} />
      <SkillLine from={4} to={5} />

      <SkillLine from={8} to={9} fromAnchor={0.33} toAnchor={0.66} />
      <SkillLine from={8} to={10} fromAnchor={0.66} toAnchor={0.33} />

      <SkillLine from={11} to={15} fromAnchor={0.9} toAnchor={0.3} />
      <SkillLine from={12} to={15} fromAnchor={0.66} toAnchor={0.45} />
      <SkillLine from={13} to={15} fromAnchor={0.33} toAnchor={0.55} />
      <SkillLine from={14} to={15} fromAnchor={0.1} toAnchor={0.7} />
    </Container>
  );
};

export default RogueTree;
