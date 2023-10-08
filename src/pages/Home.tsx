import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <div>
        Arbre de compétences pour le jeu <span className="font-bold">Mini Rogue</span>.
      </div>

      <div className="mt-4 font-bold">
        <div>Extension fan-made pour usage personnel uniquement.</div>
      </div>

      <div className="mt-8">
        <div>
          Crédits <span className="font-bold">Mini Rogue</span> :
        </div>
        <div> Conception : Paolo Di Stefano et Gabriel Gendron</div>
        <div>Illustrations : Gabriel Gendron</div>
        <div>Publication : Nuts Publishing</div>
      </div>
    </div>
  );
};

export default Home;
