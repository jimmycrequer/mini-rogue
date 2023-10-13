import { FC } from "react";
import { RogueSkills } from "../skills";
import Skill from "./Skill";

const RogueTree: FC = () => {
  return (
    <div className="flex flex-col gap-4 main">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src="/trees/common/combat.png" alt="combat" className="inline h-5 mr-2" />
          <span>(en combat)</span>
        </div>
        <div className="col-span-2">
          <img src="/trees/common/statistiques.png" alt="statistiques" className="inline h-5 mr-2" />
          <span>(statistiques)</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={RogueSkills[0]} />
        <Skill skill={RogueSkills[1]} />
      </div>

      <div>
        <img src="/trees/common/marchand.png" alt="marchand" className="inline h-5 mr-2" />
        <span>(chez le marchand)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={RogueSkills[2]} />
        <Skill skill={RogueSkills[3]} />
        <Skill skill={RogueSkills[4]} />
      </div>

      <div>
        <img src="/trees/common/exploration.png" alt="exploration" className="inline h-5 mr-2" />
        <span>(en exploration)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={RogueSkills[5]} />
        <div className="relative">
          <div className="absolute top-12 w-full h-full">
            <Skill skill={RogueSkills[7]} />
          </div>
        </div>
        <Skill skill={RogueSkills[8]} />

        <Skill skill={RogueSkills[6]} />
        <div />
        <Skill skill={RogueSkills[9]} />

        <div />
        <div className="relative h-20">
          <div className="absolute -left-8 w-full h-full">
            <Skill skill={RogueSkills[10]} additionalLabel="(en combat)" />
          </div>
        </div>
        <div />

        <div />
        <div className="relative h-20">
          <div className="absolute -left-8 w-full h-full">
            <Skill skill={RogueSkills[11]} additionalLabel="(en combat)" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-12 w-full h-full">
            <Skill skill={RogueSkills[14]} />
          </div>
        </div>

        <div />
        <div className="relative h-20">
          <div className="absolute -left-8 w-full h-full">
            <Skill skill={RogueSkills[12]} additionalLabel="(chez le marchand)" />
          </div>
        </div>
        <div />

        <div />
        <div className="relative h-20">
          <div className="absolute -left-8 w-full h-full">
            <Skill skill={RogueSkills[13]} additionalLabel="(en exploration)" />
          </div>
        </div>
        <Skill skill={RogueSkills[15]} />
      </div>
    </div>
  );
};

export default RogueTree;
