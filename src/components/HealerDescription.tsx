import { FC } from "react";

const HealerDescription: FC = () => {
  return (
    <div>
      {/* ================================ COMPETENCES ================================ */}
      <div className="flex flex-col gap-4">
        {/* apothicaire 1 */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">apothicaire 1</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Achète les potions de soins et de bénédictions 4 pièces d'or</div>
        </div>

        {/* apothicaire 2 */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">apothicaire 2</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Peut échanger librement les potions de soin et de bénédiction</div>
        </div>

        {/* double soins */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">double soins</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>Accès à une 2e barre de potions de soin et bénédiction</div>
        </div>

        {/* triple potions */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">triple potions</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>Accès à un 3e cube de potion à poser uniquement sur la 2e barre de potions de soin et bénédiction</div>
        </div>

        {/* armure divine */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">armure divine</span>
            <span className="text-sm">(3XP)</span>
          </div>
          <div>Transforme 1 point d’armure en armure intransperçable</div>
        </div>

        {/* sanctification */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">sanctification</span>
            <span className="text-sm">(automatique au Niveau 1)</span>
          </div>
          <div>
            Si reçoit une potion de perception, jet d’un dé Personnage pour la transformer en potion de soin ou de
            bénédiction, <br />
            X-2-3 = potion de soin <br />
            4-5-6 = potion de bénédiction
          </div>
        </div>

        {/* philantrope */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">philantrope</span>
            <span className="text-sm">(automatique au Niveau 2)</span>
          </div>
          <div>Peut utiliser les potions de soins et de bénédictions sur l’allié</div>
        </div>

        {/* sacrifice */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">sacrifice</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Sacrifie 6 PV pour créer une potion de soin</div>
        </div>

        {/* jeûne spirituel */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">jeûne spirituel</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Si pas de ration en fin de niveau, jet d'un dé Personnage, <br />
            X-2 = perd 2 PV <br />
            3-4 = perd 1 PV <br />
            5-6 = ne perd rien
          </div>
        </div>

        {/* sagacité */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">sagacité</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Les salles où le test de compétence donne ± 1 au dé Donjon deviennent ± 2</div>
        </div>

        {/* grâce divine */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">grâce divine</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>
            Contre 3 PV, peut faire une « prouesse » sur l’ensemble des dés Personnage dans les salles avec test de
            compétence
          </div>
        </div>

        {/* nécromancie */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">nécromancie</span>
            <span className="text-sm">(4XP)</span>
          </div>
          <div>
            Jet d'un dé Personnage après la mort d’un monstre, 4-5-6 = le monstre accompagne le guérisseur qui peut :
            <br />
            - le faire encaisser 1 fois les dégât reçus lors d'un combat <br />
            - le jeter dans un piège (avant le jet de dés) pour sauter la salle correspondante <br />
            - s’en débarrasser à tout moment et récupérer 2 PV <br /> ⚠ à chaque fin de niveau (à l'exception du niveau
            ou le monstre a été ramassé), le guérisseur doit payer 2 PV pour le conserver en vie
          </div>
        </div>

        {/* exorcisme */}
        <div>
          <div>
            <span className="skill-healer mr-2 text-lg">exorcisme</span>
            <span className="text-sm">(4XP)</span>
          </div>
          <div>
            Sacrifice du monstre possédé pour tenter de créer une potion de bénédiction, jet d'un dé Personnage :<br />
            X = reçoit une malédiction <br />
            2-3-4-5 = perd 2 PV et crée la potion de bénédiction <br />6 = crée la potion de bénédiction
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">○ ○ ○</div>

      <div className="text-base font-semibold underline mb-2">Précisions sur les compétences</div>

      {/* ================================ PRECISIONS ================================ */}
      <div className="flex flex-col gap-4">
        <div>
          Le guérisseur ne peut ramener à la vie qu'un seul monstre à la fois avec la compétence{" "}
          <span className="skill-healer">nécromancie</span>. <br />
          Le monstre ramené à la vie n'est pas considéré comme un objet et n'empêche donc pas le guérisseur d'en porter
          un.
        </div>

        <div>
          Le point d’armure devenu <span className="skill-healer">armure divine</span> ne peut en aucun cas être ignoré.
        </div>

        <div>
          La compétence <span className="skill-healer">nécromancie</span> peut s’effectuer après avoir battu un monstre
          ou un Boss. Elle ne peut pas s’effectuer sur le Fantôme. <br />
          Deux joueurs peuvent effectuer cette compétence sur le même monstre battu.
        </div>
      </div>
    </div>
  );
};

export default HealerDescription;
