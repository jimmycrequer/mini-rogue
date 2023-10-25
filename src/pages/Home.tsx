import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen">
      <div className="font-bold text-center">Arbre de compétences</div>

      <div className="mt-4">
        Cette extension a été créée pour inclure des différences de gameplay en fonction des classes tout en conservant
        le gameplay général du jeu officiel <span className="font-bold">Mini Rogue</span>.
      </div>

      <div className="mt-4">
        <div>
          Il s'agit d'une <span className="font-bold">extension fan-made pour un usage personnel uniquement</span>.
        </div>
      </div>

      <div className="mt-8">
        <div>
          Crédits du jeu officiel <span className="font-bold">Mini Rogue</span> :
        </div>
        <div> Conception : Paolo Di Stefano et Gabriel Gendron</div>
        <div>Illustrations : Gabriel Gendron</div>
        <div>Publication : Nuts Publishing</div>
      </div>
    </div>
  );
};

export default Home;
