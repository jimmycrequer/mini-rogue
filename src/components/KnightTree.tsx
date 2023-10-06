import Skill from "./Skill";
import { KnightSkills } from "../skills";

export default function KnightTree() {
  return (
    <div className="flex flex-col gap-4 main">
      <div>
        <img src="/trees/common/marchand.png" alt="marchand" className="inline h-5 mr-2" />
        <span>(chez le marchand)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={KnightSkills[0]} />
        <Skill skill={KnightSkills[1]} />
      </div>

      <div>
        <img src="/trees/common/exploration.png" alt="exploration" className="inline h-5 mr-2" />
        <span>(en exploration)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={KnightSkills[2]} />
        <Skill skill={KnightSkills[3]} />
        <Skill skill={KnightSkills[4]} />
        <Skill skill={KnightSkills[5]} />
        <Skill skill={KnightSkills[6]} />
      </div>

      <div>
        <img src="/trees/common/combat.png" alt="combat" className="inline h-5 mr-2" />
        <span>(en combat)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={KnightSkills[7]} />
        <div className="relative">
          <div className="absolute -top-8 w-full h-full">
            <Skill skill={KnightSkills[8]} />
          </div>
        </div>
        <div />

        <Skill skill={KnightSkills[9]} />
        <Skill skill={KnightSkills[10]} />
        <div className="relative">
          <div className="absolute -top-12 w-full h-full">
            <Skill skill={KnightSkills[11]} />
          </div>
          <div className="absolute top-12 w-full h-full">
            <Skill skill={KnightSkills[13]} />
          </div>
        </div>

        <Skill skill={KnightSkills[12]} />
      </div>
    </div>
  );
}
