import { Container, Sprite, Text } from "@pixi/react";
import { FC } from "react";

type TLabelProps = { x?: number; y?: number };

const MerchantLabel: FC<TLabelProps> = ({ x = 0, y = 0 }) => (
  <Container x={x} y={y}>
    <Sprite image="/trees/common/marchand.png" anchor={[0, 0.5]} />
    <Text text="(chez le marchand)" isSprite x={110} anchor={[0, 0.5]} />
  </Container>
);

export default MerchantLabel;
