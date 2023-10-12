import { FC, ReactElement } from "react";
import { Character, useCharacter } from "../characterContext";
import KnightDescription from "../components/KnightDescription";
import HealerDescription from "../components/HealerDescription";
import WizardDescription from "../components/WizardDescription";
import RogueDescription from "../components/RogueDescription";

const descriptions: Record<Exclude<Character["class"], undefined>, ReactElement> = {
  Knight: <KnightDescription />,
  Healer: <HealerDescription />,
  Wizard: <WizardDescription />,
  Rogue: <RogueDescription />,
};

const CompetencesDescription: FC = () => {
  const character = useCharacter();

  return character.class ? descriptions[character.class] : <div />;
};

export default CompetencesDescription;
