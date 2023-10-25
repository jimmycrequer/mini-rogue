import { FC } from "react";
import Skill from "./Skill";
import { KnightSkills } from "../skills";
import { Container } from "@pixi/react";
import MerchantLabel from "./trees/MerchantLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import BattleLabel from "./trees/BattleLabel";
import SkillLine from "./SkillLine";

const KnightTree: FC = () => {
  const cols = [120, 370, 630];

  return (
    <Container y={20}>
      <MerchantLabel />

      <Container y={110}>
        <Skill skill={KnightSkills[0]} x={cols[0]} />
        <Skill skill={KnightSkills[1]} x={cols[1]} />
      </Container>

      <ExplorationLabel y={270} />

      <Container y={380}>
        <Skill skill={KnightSkills[2]} x={cols[0]} />
        <Skill skill={KnightSkills[3]} x={cols[1]} />
        <Skill skill={KnightSkills[4]} x={cols[2]} />
      </Container>

      <Container y={570}>
        <Skill skill={KnightSkills[5]} x={cols[0]} />
        <Skill skill={KnightSkills[6]} x={cols[1]} />
      </Container>

      <BattleLabel y={730} />

      <Skill skill={KnightSkills[7]} x={cols[0]} y={840} />
      <Skill skill={KnightSkills[9]} x={cols[0]} y={1050} />
      <Skill skill={KnightSkills[12]} x={cols[0]} y={1250} />

      <Skill skill={KnightSkills[8]} x={cols[1]} y={780} />
      <Skill skill={KnightSkills[10]} x={cols[1]} y={1050} />

      <Skill skill={KnightSkills[11]} x={cols[2]} y={930} />
      <Skill skill={KnightSkills[13]} x={cols[2]} y={1160} />

      <SkillLine from={6} to={7} />
      <SkillLine from={8} to={9} fromAnchor={0.33} />
      <SkillLine from={8} to={12} fromAnchor={0.66} toAnchor={0.33} />
      <SkillLine from={10} to={11} />
      <SkillLine from={11} to={12} fromAnchor={0.33} toAnchor={0.66} />
      <SkillLine from={11} to={14} fromAnchor={0.66} toAnchor={0.33} />
      <SkillLine from={13} to={14} fromAnchor={0.33} toAnchor={0.66} />
    </Container>
  );
};

export default KnightTree;
