export default function KnightDescription() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">maître d'arme</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Achète les armures 4 pièces d'or</div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">boucher</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Peut vendre ses rations pour un nombre de pièces d'or correspondant à l'étage en cours</div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">malédiction</span>
            <span className="text-sm">(automatique au Niveau 1)</span>
          </div>
          <div>
            Échange une potion de feu, de givre, de poison ou de perception reçue ou achetée contre une potion de
            malédiction à appliquer sur lui-même pour permettre d'activer le mode « Berserk »
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">pas de gâchis</span>
            <span className="text-sm">(automatique au Niveau 2)</span>
          </div>
          <div>
            Si l'allié, dans la même salle, ne prend pas la ration qu'il gagne car il en a trop, le chevalier peut la
            récupérer
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">avant-garde</span>
            <span className="text-sm">(automatique au Niveau 2)</span>
          </div>
          <div>
            Une fois par combat, si l'allié est sur le point de perdre ses derniers PV, le chevalier passe en première
            ligne pour encaisser l'attaque (après avoir lancé ses dés Personnage pour tenter de valider les bonus
            d'armures). Le chevalier enchaîne ensuite avec son propre tour de combat
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">festin</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>
            Après avoir mangé une ration pour passer au niveau suivant, peut manger des rations supplémentaires et
            gagner 3 PV par ration mangée
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">tératovore</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>
            Jet d'un dé Personnage après la mort d'un monstre,
            <br /> 4-5-6 = extraction d'une ration
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">berserk</span>
            <span className="text-sm">(automatique au niveau 2)</span>
          </div>
          <div>
            Lorsque le chevalier est sous l'emprise d'une malédiction, il peut activer le mode « Berserk ».
            <p className="pl-4 pt-1">
              * donne +1 aux résultats de chaque dé Personnage à chaque lancé d'attaque pendant les phases de combat{" "}
              <br /> (les valeurs correspondant à un échec d'attaque ainsi que le 6, étant le maximum, ne changent pas
              la valeur ; le bonus ne s'applique également pas au lancé de dé suivant une attaque critique)
            </p>
            <p className="pl-4 pt-1">
              * chaque lancé de dé Personnage lors d'un tour de combat ou d'une prouesse retire 1 PV
              <br />
              (le lancé de dé suite à une attaque critique n'est pas considéré comme un nouveau lancé et ne retire donc
              pas de PV)
            </p>
            <p className="pl-4 pt-1">* chaque entrée dans une salle (hors combat) retire 1 PV</p>
            <p className="pl-4 pt-1">
              * manger une ration permet de sortir du mode « Berserk » et revenir sous l'effet original de la
              malédiction
            </p>
            <p className="pl-4 pt-1">* les bénédictions dissipent le mode « Berserk » en guérissant la malédiction</p>
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">immunité</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>Immunité au poison pendant la durée d'activation du mode « Berserk »</div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">bonus d'armure 1 et 2</span>
            <span className="text-sm">(3XP + 3XP)</span>
          </div>
          <div>
            2 points d'armure bonus qui sont ajoutés à ceux de base pendant 1 tour de combat si les dés Personnage
            présentent un 5 ou un 6 lors du tour d'attaque
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">peau de fer</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>
            Pendant la durée d'activation du mode « Berserk », les bonus d'armures acquis sont constamment actifs lors
            des combats
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">prouesse efficace</span>
            <span className="text-sm">(3XP)</span>
          </div>
          <div>
            Quand le mode « Berserk » n'est plus activé, pour le prix d'une simple prouesse, peut effectuer une prouesse
            sur plusieurs dés Personnage simultanément
          </div>
        </div>

        <div>
          <div>
            <span className="skill-knight mr-2 text-lg">armure efficace</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>
            Les bonus d'armures sont acquis pendant 1 tour de combat si les dés Personage présentent un 4, un 5 ou un 6
            lors du tour d'attaque
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">○ ○ ○</div>

      <div className="text-base font-semibold underline mb-2">Précisions sur les compétences</div>

      <div className="flex flex-col gap-4">
        <p>
          Lors de l'utilisation de la compétence <span className="skill-knight">avant-garde</span>, si les joueurs sont
          dans des salles différentes, le chevalier se déplace dans la salle de l'allié et conserve ce qu'il a gagné
          dans la salle précédente mais ne gagne pas la récompense du combat.
          <br />
          S'il n'a pas encore résolu la salle où il se trouvait, le chevalier abandonne la récompense qui s'y trouve et
          recevra la récompense du combat qu'il rejoint.
        </p>

        <div>
          <p>
            Lors de l'activation du mode <span className="skill-knight">berserk</span>, le joueur pose le dé de
            malédiction sur l'emplacement correspondant sur le plateau de jeu.
          </p>
          <p>
            Il le replace parmi ses dés s'il utilise une ration, ou s'en débarrasse s'il utilise une bénédiction pour
            sortir du mode « Berserk ».
          </p>
          <p className="mt-2 underline">Les postures de combat en mode « Berserk » :</p>
          <table className="table-auto w-full mt-2">
            <thead>
              <tr>
                <td className="w-12"></td>
                <td className="underline">Équilibrée</td>
                <td className="underline">Agressive</td>
                <td className="underline">Défensive</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X</td>
                <td>{"=>"} échec</td>
                <td>{"=>"} échec</td>
                <td>{"=>"} 2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{"=>"} 3</td>
                <td>{"=>"} échec</td>
                <td>{"=>"} 3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{"=>"} 4</td>
                <td>{"=>"} 4</td>
                <td>{"=>"} 4</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{"=>"} 5</td>
                <td>{"=>"} 5 (critique)</td>
                <td>{"=>"} 5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>{"=>"} 6 (critique)</td>
                <td>{"=>"} 6 (critique)</td>
                <td>{"=>"} 6</td>
              </tr>
              <tr>
                <td>6</td>
                <td>{"=>"} 6 (critique)</td>
                <td>{"=>"} 6 (critique)</td>
                <td>{"=>"} 6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Les points d’armure acquis avec <span className="skill-knight">bonus d'armure</span> sont comptabilisés lors
          de la compétence de personnage du Croisé, Assommer (“Ajouter le double de votre valeur d’armure aux dégâts de
          votre attaque”)
        </p>

        <p>
          Lors de l'utilisation de la compétence <span className="skill-knight">avant-garde</span> en mode « Berserk »,
          s'il y a besoin de lancer les dés Personnage pour valider les bonus d'armure, cette action ne retire pas de
          PV.
        </p>

        <p>
          La compétence <span className="skill-knight">immunité</span> protège du poison si le chevalier était
          empoisonné avant ou s'il se fait empoisonner durant la durée d'activation du mode « Berserk ». Le joueur pose
          la dé de poison sur l'emplacement correspondant sur le plateau de jeu.
          <br />
          En sortant du mode « Berserk » avec une ration, le poison redevient actif.
        </p>

        <p>
          La compétence <span className="skill-knight">tératovore</span> peut s’effectuer après avoir battu un monstre
          ou un Boss. Elle ne peut pas s’effectuer sur le Fantôme. Deux joueurs peuvent effectuer cette compétence sur
          le même monstre battu.
        </p>
      </div>
    </div>
  );
}
