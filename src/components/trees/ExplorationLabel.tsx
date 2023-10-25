import { Container, Sprite, Text } from "@pixi/react";
import { FC } from "react";

type TLabelProps = { x?: number; y?: number };

const ExplorationLabel: FC<TLabelProps> = ({ x = 0, y = 0 }) => (
  <Container x={x} y={y}>
    <Sprite image="/trees/common/exploration.png" anchor={[0, 0.5]} />
    <Text text="(en exploration)" isSprite x={50} anchor={[0, 0.5]} />
  </Container>
);

export default ExplorationLabel;
