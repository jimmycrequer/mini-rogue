import { FC, ReactElement } from "react";
import { Character, useCharacter } from "../characterContext";
import KnightTree from "../components/KnightTree";
import HealerTree from "../components/HealerTree";
import WizardTree from "../components/WizardTree";
import RogueTree from "../components/RogueTree";

const trees: Record<Exclude<Character["class"], undefined>, ReactElement> = {
  Knight: <KnightTree />,
  Healer: <HealerTree />,
  Wizard: <WizardTree />,
  Rogue: <RogueTree />,
};

const CompetencesTree: FC = () => {
  const character = useCharacter();

  return character.class ? trees[character.class] : <div />;
};

export default CompetencesTree;
