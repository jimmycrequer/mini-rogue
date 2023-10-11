import { FC } from "react";

const WizardTree: FC = () => {
  return (
    <div className="flex flex-col gap-4 main">
      <div>
        <img src="/trees/common/marchand.png" alt="marchand" className="inline h-5 mr-2" />
        <span>(chez le marchand)</span>
      </div>
      <div className="grid grid-cols-3 gap-4"></div>

      <div>
        <img src="/trees/common/exploration.png" alt="exploration" className="inline h-5 mr-2" />
        <span>(en exploration)</span>
      </div>
      <div className="grid grid-cols-3 gap-4"></div>

      <div>
        <img src="/trees/common/combat.png" alt="combat" className="inline h-5 mr-2" />
        <span>(en combat)</span>
      </div>
      <div className="grid grid-cols-3 gap-4"></div>
    </div>
  );
};

export default WizardTree;
