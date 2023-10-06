import { FC } from "react";
import { useCharacter } from "../characterContext";
import KnightTree from "../components/KnightTree";

const CompetencesTree: FC = () => {
  const character = useCharacter();

  return character.class == "Knight" ? <KnightTree /> : <span>Coming soon...</span>;
};

export default CompetencesTree;
