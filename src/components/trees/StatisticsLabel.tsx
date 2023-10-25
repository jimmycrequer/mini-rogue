import { Container, Sprite, Text } from "@pixi/react";
import { FC } from "react";

type TLabelProps = { x?: number; y?: number };

const StatisticsLabel: FC<TLabelProps> = ({ x = 0, y = 0 }) => (
  <Container x={x} y={y}>
    <Sprite image="/trees/common/statistiques.png" anchor={[0, 0.5]} />
    <Text text="(statistiques)" isSprite x={60} anchor={[0, 0.5]} />
  </Container>
);

export default StatisticsLabel;
