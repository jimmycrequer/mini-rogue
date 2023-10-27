import { FC, useEffect, useState } from "react";
import { RogueSkills } from "../skills";
import Skill from "./Skill";
import { Container, Sprite, Text, useApp } from "@pixi/react";
import BattleLabel from "./trees/BattleLabel";
import ExplorationLabel from "./trees/ExplorationLabel";
import MerchantLabel from "./trees/MerchantLabel";
import StatisticsLabel from "./trees/StatisticsLabel";
import SkillLine from "./SkillLine";
import * as PIXI from "pixi.js";
import { useCharacter } from "../characterContext";
import { initialCanvasSize, initialRatio } from "../pages/CompetencesTree";
import { useWindowSize } from "@uidotdev/usehooks";

const commonTreeAssets = [
  "/trees/common/auto-disabled.png",
  "/trees/common/default-disabled.png",
  "/trees/common/level3-disabled.png",
  "/trees/common/combat.png",
  "/trees/common/exploration.png",
  "/trees/common/marchand.png",
  "/trees/common/statistiques.png",
];

const rogueTreeAssets = [
  "/trees/rogue/auto.png",
  "/trees/rogue/default.png",
  "/trees/rogue/eye.png",
  "/trees/rogue/eye-disabled.png",
  "/trees/rogue/filled.png",
  "/trees/rogue/level3.png",
];

const rogueSkillAssets = [
  "/trees/rogue/skills/1.png",
  "/trees/rogue/skills/1-disabled.png",
  "/trees/rogue/skills/2.png",
  "/trees/rogue/skills/2-disabled.png",
  "/trees/rogue/skills/3.png",
  "/trees/rogue/skills/3-disabled.png",
  "/trees/rogue/skills/4.png",
  "/trees/rogue/skills/4-disabled.png",
  "/trees/rogue/skills/5.png",
  "/trees/rogue/skills/5-disabled.png",
  "/trees/rogue/skills/6.png",
  "/trees/rogue/skills/7.png",
  "/trees/rogue/skills/7-disabled.png",
  "/trees/rogue/skills/8.png",
  "/trees/rogue/skills/8-disabled.png",
  "/trees/rogue/skills/9.png",
  "/trees/rogue/skills/9-disabled.png",
  "/trees/rogue/skills/10.png",
  "/trees/rogue/skills/10-disabled.png",
  "/trees/rogue/skills/11.png",
  "/trees/rogue/skills/11-disabled.png",
  "/trees/rogue/skills/12.png",
  "/trees/rogue/skills/12-disabled.png",
  "/trees/rogue/skills/13.png",
  "/trees/rogue/skills/13-disabled.png",
  "/trees/rogue/skills/14.png",
  "/trees/rogue/skills/14-disabled.png",
  "/trees/rogue/skills/15.png",
  "/trees/rogue/skills/15-disabled.png",
  "/trees/rogue/skills/16.png",
  "/trees/rogue/skills/16-disabled.png",
];

enum EProgress {
  Init,
  AssetsLoaded,
  RequirementsShown,
  Done,
}

const RogueTree: FC = () => {
  const [progress, setProgress] = useState(EProgress.Init);
  const character = useCharacter();
  const app = useApp();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (progress == EProgress.Init) {
      PIXI.Assets.load([...commonTreeAssets, ...rogueTreeAssets, ...rogueSkillAssets]).finally(() => {
        setProgress(EProgress.AssetsLoaded);
      });

      return;
    }

    if (progress == EProgress.AssetsLoaded) {
      setProgress(EProgress.RequirementsShown);

      return;
    }

    if (progress == EProgress.RequirementsShown) {
      setProgress(EProgress.Done);

      return;
    }
  }, [progress]);

  useEffect(() => {
    const holder = document.getElementById("canvasHolder")!;

    const width = holder.clientWidth;
    const height = holder.clientWidth * initialRatio;

    if (progress == EProgress.Done) {
      app.renderer.resize(width, height);
    }
  }, [progress, width, height]);

  if (progress < EProgress.AssetsLoaded)
    return <Text text="CHARGEMENT..." anchor={0.5} x={200} y={50} style={new PIXI.TextStyle({ fontSize: 16 })} />;

  const cols = [90, 360, 640];

  const textColor = character.level < 2 ? "#C1C1C1" : "#000000";

  return (
    <Container>
      <Container y={20}>
        <BattleLabel />
        <StatisticsLabel x={260} />
      </Container>

      <Container y={130}>
        <Skill skill={RogueSkills[0]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[1]} x={cols[1]} y={0} />
      </Container>

      <MerchantLabel y={270} />

      <Container y={370}>
        <Skill skill={RogueSkills[2]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[3]} x={cols[1]} y={0} />
        <Skill skill={RogueSkills[4]} x={cols[2]} y={0} />
      </Container>

      <ExplorationLabel y={520} />

      <Container y={630}>
        <Skill skill={RogueSkills[5]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[8]} x={cols[2]} y={0} />
      </Container>

      <Skill skill={RogueSkills[7]} x={cols[1]} y={730} />

      <Container y={830}>
        <Skill skill={RogueSkills[6]} x={cols[0]} y={0} />
        <Skill skill={RogueSkills[9]} x={cols[2]} y={0} />
      </Container>

      <Container y={980} x={-60}>
        <Container x={255} y={-60}>
          <Text
            text="(améliorations des"
            anchor={[0, 0.5]}
            style={new PIXI.TextStyle({ fill: textColor, fontSize: 22 })}
          />
          <Sprite
            image={character.level < 2 ? "/trees/rogue/eye-disabled.png" : "/trees/rogue/eye.png"}
            x={185}
            anchor={[0, 0.5]}
          />
          <Text text=")" x={210} anchor={[0, 0.5]} style={new PIXI.TextStyle({ fill: textColor, fontSize: 22 })} />
        </Container>

        <Skill skill={RogueSkills[10]} x={cols[1]} y={0} labelPosition="left" additionalLabel="(en combat)" />
        <Skill skill={RogueSkills[11]} x={cols[1]} y={120} labelPosition="left" additionalLabel="(en combat)" />
        <Skill skill={RogueSkills[12]} x={cols[1]} y={240} labelPosition="left" additionalLabel="(chez le marchand)" />
        <Skill skill={RogueSkills[13]} x={cols[1]} y={360} labelPosition="left" additionalLabel="(en exploration)" />

        <Skill skill={RogueSkills[14]} x={cols[2]} y={180} />
        <Skill skill={RogueSkills[15]} x={cols[2]} y={360} />
      </Container>

      {progress >= EProgress.RequirementsShown && (
        <Container>
          <SkillLine from={3} to={4} />
          <SkillLine from={4} to={5} />

          <SkillLine from={8} to={9} fromAnchor={0.33} toAnchor={0.66} />
          <SkillLine from={8} to={10} fromAnchor={0.66} toAnchor={0.33} />

          <SkillLine from={11} to={15} fromAnchor={0.9} toAnchor={0.3} />
          <SkillLine from={12} to={15} fromAnchor={0.66} toAnchor={0.45} />
          <SkillLine from={13} to={15} fromAnchor={0.33} toAnchor={0.55} />
          <SkillLine from={14} to={15} fromAnchor={0.1} toAnchor={0.7} />
        </Container>
      )}
    </Container>
  );
};

export default RogueTree;
