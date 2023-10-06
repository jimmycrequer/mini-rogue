import { FC } from "react";
import { useCharacter } from "../characterContext";
import KnightDescription from "../components/KnightDescription";

const CompetencesDescription: FC = () => {
  const character = useCharacter();

  return character.class == "Knight" ? <KnightDescription /> : <span>Coming soon...</span>;
};

export default CompetencesDescription;
