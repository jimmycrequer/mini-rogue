import { FC, ReactElement, useRef } from "react";
import {
  Character,
  CharacterContext,
  CharacterDispatchContext,
  useCharacter,
  useCharacterDispatch,
} from "../characterContext";
import KnightTree from "../components/KnightTree";
import HealerTree from "../components/HealerTree";
import WizardTree from "../components/WizardTree";
import RogueTree from "../components/RogueTree";
import { Stage } from "@pixi/react";
import * as PIXI from "pixi.js";
import "@pixi/events";
import { useWindowSize } from "@uidotdev/usehooks";

const trees: Record<Exclude<Character["class"], undefined>, ReactElement> = {
  Knight: <KnightTree />,
  Healer: <HealerTree />,
  Wizard: <WizardTree />,
  Rogue: <RogueTree />,
};

export const initialCanvasSize = { width: 731, height: 1411 };
export const initialRatio = 1411 / 731;

const CompetencesTree: FC = () => {
  const character = useCharacter();
  const dispatch = useCharacterDispatch();

  const { width, height } = useWindowSize();
  const previousSize = useRef({ width, height });

  const handleMount = (app: PIXI.Application<PIXI.ICanvas>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore needed for PIXI debugger extension
    globalThis.__PIXI_APP__ = app;

    // allow scroll
    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style!.touchAction = "auto";

    app.renderer.on("resize", (width, height) => {
      console.log("resize", app.stage.children.length);
      for (let i = 0; i < app.stage.children.length; i++) {
        const child = app.stage.children[i] as PIXI.Container;

        const x = child.position.x * (width / previousSize.current.width!);
        const y = child.position.y * (height / previousSize.current!.height!);
        const scaleX = width / initialCanvasSize.width;
        const scaleY = height / initialCanvasSize.height;

        child.position.set(x, y);
        child.scale.set(scaleX, scaleY);
      }

      previousSize.current = { width, height };
    });
  };

  return !character.class ? (
    <div />
  ) : (
    <div id="canvasHolder" className="w-full">
      <Stage
        width={initialCanvasSize.width}
        height={initialCanvasSize.height}
        options={{ backgroundAlpha: 0 }}
        onMount={handleMount}
      >
        {/* need to pass context inside canvas to work */}
        <CharacterContext.Provider value={character}>
          <CharacterDispatchContext.Provider value={dispatch}>
            {trees[character.class!]}
          </CharacterDispatchContext.Provider>
        </CharacterContext.Provider>
      </Stage>
    </div>
  );
};

export default CompetencesTree;
