import { useWindowSize } from "@uidotdev/usehooks";
import { FC, PropsWithChildren, useState, useEffect } from "react";
import LineTo from "react-lineto";
import { Character, useCharacter } from "../characterContext";

type TProps = PropsWithChildren & {
  from: number;
  to: number;
};

const trees: Record<Exclude<Character["class"], undefined>, string> = {
  Knight: "#78B3A3",
  Healer: "#D85A4A",
  Wizard: "",
  Rogue: "",
};

const SkillLine: FC<TProps> = ({ from, to }) => {
  const character = useCharacter();
  const [show, setShow] = useState(false);

  // force refresh after first rendering
  // and each window size update to make sure lines are set properly
  useEffect(() => setShow(true), []);
  useWindowSize();

  const fromNode = document.getElementsByClassName(`${from}`)[0];
  const toNode = document.getElementsByClassName(`${to}`)[0];

  if (!fromNode || !toNode) return <div />;

  const axisFrom = fromNode.getBoundingClientRect().y + fromNode.getBoundingClientRect().height / 2;
  const axisTo = toNode.getBoundingClientRect().y + toNode.getBoundingClientRect().height / 2;

  const offset = 15;

  let anchorLeft = 45;
  let anchorRight = 46;

  if (axisFrom > axisTo) {
    anchorLeft -= offset;
    anchorRight += offset;
  }
  if (axisFrom < axisTo) {
    anchorLeft += offset;
    anchorRight -= offset;
  }

  const meetsRequirements = character.skills.includes(from);

  const color = meetsRequirements ? trees[character.class!] : "#C1C1C1";

  return (
    <div className="absolute">
      {show && (
        <LineTo
          from={`${from}`}
          fromAnchor={`103 ${anchorLeft}`}
          to={`${to}`}
          toAnchor={`-3 ${anchorRight}`}
          delay={100}
          borderWidth={3}
          borderColor={color}
        />
      )}
    </div>
  );
};

export default SkillLine;
