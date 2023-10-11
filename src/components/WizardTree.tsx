import { FC } from "react";
import Skill from "./Skill";
import { WizardSkills } from "../skills";

const WizardTree: FC = () => {
  return (
    <div className="flex flex-col gap-4 main">
      <div>
        <img src="/trees/common/statistiques.png" alt="statistiques" className="inline h-5 mr-2" />
        <span>(statistiques)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={WizardSkills[0]} />
        <Skill skill={WizardSkills[1]} />
        <div />

        <Skill skill={WizardSkills[2]} iconClassName="pt-2" />
        <Skill skill={WizardSkills[3]} />
      </div>

      <div>
        <div className="float-left">
          <img src="/trees/common/marchand.png" alt="marchand" className="inline h-5 mr-2" />
          <span>(chez le marchand)</span>
        </div>

        <div className="float-right mr-4">
          <img src="/trees/common/combat.png" alt="combat" className="inline h-5 mr-2" />
          <span>(en combat)</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={WizardSkills[4]} iconClassName="pt-2" />
        <div />
        <Skill skill={WizardSkills[5]} />
      </div>

      <div>
        <img src="/trees/common/exploration.png" alt="exploration" className="inline h-5 mr-2" />
        <span>(en exploration)</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Skill skill={WizardSkills[6]} iconClassName="pt-2" />
        <Skill skill={WizardSkills[7]} />
        <Skill skill={WizardSkills[9]} iconClassName="pt-2" />

        <div />
        <Skill skill={WizardSkills[8]} />
        <Skill skill={WizardSkills[10]} />

        <div />
        <div />
        <Skill skill={WizardSkills[11]} />
      </div>
    </div>
  );
};

export default WizardTree;
