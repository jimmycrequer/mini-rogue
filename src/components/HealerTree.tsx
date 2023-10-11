import { FC } from "react";
import Skill from "./Skill";
import { HealerSkills } from "../skills";

const HealerTree: FC = () => {
  return (
    <div className="flex flex-col gap-4 main">
      <div>
        <img src="/trees/common/marchand.png" alt="marchand" className="inline h-5 mr-2" />
        <span>(chez le marchand)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={HealerSkills[0]} />
        <Skill skill={HealerSkills[1]} />
      </div>

      <div>
        <img src="/trees/common/statistiques.png" alt="statistiques" className="inline h-5 mr-2" />
        <span>(statistiques)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={HealerSkills[2]} iconClassName="pt-2" />
        <Skill skill={HealerSkills[3]} />
        <div />
        <Skill skill={HealerSkills[4]} />
      </div>

      <div>
        <img src="/trees/common/exploration.png" alt="exploration" className="inline h-5 mr-2" />
        <span>(en exploration)</span>
      </div>
      <div className="grid grid-cols-3 gap-4 gap-y-16 mb-12">
        <Skill skill={HealerSkills[5]} />
        <Skill skill={HealerSkills[6]} />
        <Skill skill={HealerSkills[7]} />

        <Skill skill={HealerSkills[8]} />
        <div className="relative">
          <div className="absolute -top-12 w-full h-full">
            <Skill skill={HealerSkills[9]} />
          </div>
          <div className="absolute top-12 w-full h-full">
            <Skill skill={HealerSkills[11]} />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 w-full h-full">
            <Skill skill={HealerSkills[10]} />
          </div>
          <div className="absolute top-12 w-full h-full">
            <Skill skill={HealerSkills[12]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealerTree;
