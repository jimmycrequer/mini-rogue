import { useWindowSize } from "@uidotdev/usehooks";
import { FC, PropsWithChildren, useState, useEffect } from "react";
import LineTo from "react-lineto";
import { useCharacter } from "../characterContext";

type TProps = PropsWithChildren & {
  from: number;
  to: number;
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

  const diff = fromNode.getBoundingClientRect().y - toNode.getBoundingClientRect().y;

  const offset = 15;

  let anchorLeft = 45;
  let anchorRight = 45;

  if (diff > 0) {
    anchorLeft -= offset;
    anchorRight += offset;
  }
  if (diff < 0) {
    anchorLeft += offset;
    anchorRight -= offset;
  }

  const meetsRequirements = character.skills.includes(from);

  // const color = meetsRequirements ? (fullConfig.theme!.colors!["knight-skill"] as string) : "#C1C1C1";
  const color = meetsRequirements ? "#78B3A3" : "#C1C1C1";

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
