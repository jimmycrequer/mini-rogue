import { FC } from "react";
import Skill from "./Skill";
import { HealerSkills } from "../skills";
import { Container } from "@pixi/react";
import MerchantLabel from "./trees/MerchantLabel";
import StatisticsLabel from "./trees/StatisticsLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import SkillLine from "./SkillLine";

const HealerTree: FC = () => {
  const cols = [100, 350, 610];

  return (
    <Container y={20}>
      <MerchantLabel />

      <Container y={110}>
        <Skill skill={HealerSkills[0]} x={cols[0]} />
        <Skill skill={HealerSkills[1]} x={cols[1]} />
      </Container>

      <StatisticsLabel y={270} />

      <Container y={380}>
        <Skill skill={HealerSkills[2]} x={cols[0]} />
        <Skill skill={HealerSkills[3]} x={cols[1]} />
      </Container>

      <Skill skill={HealerSkills[4]} x={cols[0]} y={570} />

      <ExplorationLabel y={740} />

      <Container y={870}>
        <Skill skill={HealerSkills[5]} x={cols[0]} />
        <Skill skill={HealerSkills[6]} x={cols[1]} />
        <Skill skill={HealerSkills[7]} x={cols[2]} />
      </Container>

      <Container y={1060}>
        <Skill skill={HealerSkills[9]} x={cols[1]} />
        <Skill skill={HealerSkills[10]} x={cols[2]} />
      </Container>

      <Skill skill={HealerSkills[8]} x={cols[0]} y={1150} />

      <Container y={1250}>
        <Skill skill={HealerSkills[11]} x={cols[1]} />
        <Skill skill={HealerSkills[12]} x={cols[2]} bottomIconOffset={-20} />
      </Container>

      <SkillLine from={3} to={4} />
      <SkillLine from={9} to={10} fromAnchor={0.33} />
      <SkillLine from={9} to={12} fromAnchor={0.66} />
      <SkillLine from={10} to={11} />
      <SkillLine from={12} to={13} />
    </Container>
  );
};

export default HealerTree;
