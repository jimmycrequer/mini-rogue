import { FC } from "react";

const WizardDescription: FC = () => {
  return (
    <div>
      {/* ================================ COMPETENCES ================================ */}
      <div className="flex flex-col gap-4">
        {/* armure magique */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">armure magique</span>
            <span className="text-sm">(3XP + 3XP)</span>
          </div>
          <div>Transforme 1 point d’armure en armure intransperçable</div>
        </div>

        {/* double sorts */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">double sorts</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>Accès à une 2e barre de potions de feu, glace et poison</div>
        </div>

        {/* triple potions */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">triple potions</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>Accès à un 3e cube de potion à poser uniquement sur la 2e barre de potions</div>
        </div>

        {/* professeur */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">professeur</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>Achète et vend les potions 4 pièces d'or</div>
        </div>

        {/* ambidextrie */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">ambidextrie</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>
            Peut effectuer 2 actions liées aux potions par tour de combat, <br />
            - utiliser une potion d'attaque <br />- créer une potion (<span className="skill-wizard">
              alchimie
            </span>) <br />
            <br />
            La création d'ingrédients de potion (<span className="skill-wizard">réduction</span>,{" "}
            <span className="skill-wizard">saignée</span>) ne compte pas comme une action et peut être effectuée en tout
            temps, même pendant un combat
          </div>
        </div>

        {/* prémonition */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">prémonition</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>En arrivant dans une salle, dévoile les 2 salles suivantes (sauf en cas d'aveuglement)</div>
        </div>

        {/* oeil du prophète */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">oeil du prophète</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>Immunité à l’aveuglement</div>
        </div>

        {/* alchimie */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">alchimie</span>
            <span className="text-sm">(automatique au niveau 2)</span>
          </div>
          <div>
            Création d’une potion contre 3 ingrédients de potions, jet d'un dé Personnage,
            <br />
            X = se fait empoisonner et créé une potion au choix
            <br />
            2-3-4 = perd 2 PV et créé une potion au choix
            <br />
            5-6 = créé une potion au choix
          </div>
        </div>

        {/* réduction */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">réduction</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Échange d’une potion gagnée ou possédée contre 1 ingrédient de potion</div>
        </div>

        {/* saignée */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">saignée</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Crée un ingrédient de potion contre un sacrifice de PV, jet d’un dé Personnage,
            <br />
            X-2-3 = perd 3 PV
            <br />
            4-5 = perd 2 PV
            <br />6 = perd 1 PV
          </div>
        </div>

        {/* dépeçage */}
        <div>
          <div>
            <span className="skill-wizard mr-2 text-lg">dépeçage</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Jet d'un dé Personnage après la mort d’un monstre,
            <br />
            4-5-6 = extraction d’un ingrédient de potion
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">○ ○ ○</div>

      <div className="text-base font-semibold underline mb-2">Précisions sur les compétences</div>

      {/* ================================ PRECISIONS ================================ */}
      <div className="flex flex-col gap-4">
        <div>
          Lors de l’acquisition de la compétence <span className="skill-wizard">alchimie</span> le joueur place la
          figurine du mage (vert) sur l’emplacement correspondant sur le plateau de jeu.
        </div>

        <div>
          Le magicien peut effectuer 2 fois la même action avec la compétence{" "}
          <span className="skill-wizard">ambidextrie</span>. La compétence de personnage du Mage, Conjuration (
          <span className="italic">
            “Appliquez l'effet d'une potion de Feu, de Givre ou de Poison. Vous n’avez pas besoin de la posséder”
          </span>
          ) n’est pas une action liée aux potions et peut donc être utilisée en plus.
        </div>

        <div>
          Avant que le magicien n’utilise <span className="skill-wizard">prémonition</span>, un allié aveuglé doit
          décider sa prochaine salle.
        </div>

        <div>
          Les points d’armure devenus <span className="skill-wizard">armure magique</span> ne peuvent en aucun cas être
          ignorés
        </div>

        <div>
          La compétence <span className="skill-wizard">dépeçage</span> peut s’effectuer après avoir battu un monstre ou
          un Boss. Elle ne peut pas s’effectuer sur le Fantôme.
          <br />
          Deux joueurs peuvent effectuer cette compétence sur le même monstre battu.
        </div>
      </div>
    </div>
  );
};

export default WizardDescription;
