import { FC } from "react";

const RogueDescription: FC = () => {
  return (
    <div>
      {/* ================================ COMPETENCES ================================ */}
      <div className="flex flex-col gap-4">
        {/* esquive */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">esquive</span>
            <span className="text-sm">(automatique au niveau 2)</span>
          </div>
          <div>Ne reçoit plus de dégâts lorsque le dé Donjon tombe sur 2</div>
        </div>

        {/* grande bourse */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">grande bourse</span>
            <span className="text-sm">(4XP)</span>
          </div>
          <div>Peut porter 5 pièces d'or en plus</div>
        </div>

        {/* charisme */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">charisme</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Vend ses objets 1 pièce d'or de plus</div>
        </div>

        {/* négociation */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">négociation</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Négocie le prix d’achat d’une marchandise, jet de dés Personnage : <br />
            X-2-3 = échec, paie prix initial <br />
            4-5-6 = réussite, remise de 1 pièce d'or
          </div>
        </div>

        {/* vol à l'étalage */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">vol à l'étalage</span>
            <span className="text-sm">(3XP)</span>
          </div>
          <div>
            Si le jet de Négociation est réussi, accès à un 2e jet de dés pour voler la marchandise, <br />
            X-2 = échec critique, exclusion immédiate du magasin <br />
            3-4 = échec du vol mais conservation de la remise obtenue avec le jet de Négociation <br />
            5-6 = vol réussi <br />
            <br />⚠ en parallèle des jets de dés Personnage lors de <span className="skill-rogue">
              négociation
            </span> et <span className="skill-rogue">vol à l'étalage</span>, jet d'un dé Donjon (dé d'attention du
            marchand) : <br />
            1 = +1 au résultat du dé Personnage <br />6 = -1 au résultat du dé Personnage
          </div>
        </div>

        {/* substitution */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">substitution</span>
            <span className="text-sm">(automatique au niveau 1)</span>
          </div>
          <div>Échange librement une potion de feu, de givre ou de poison reçue contre une potion de perception</div>
        </div>

        {/* bienveillance */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">bienveillance</span>
            <span className="text-sm">(automatique au niveau 2)</span>
          </div>
          <div>
            Peut utiliser les potions de perception sur l’allié pour guérir son aveuglement ou pour valider son test de
            compétence
          </div>
        </div>

        {/* dextérité */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">dextérité</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>Le test de compétence des cartes Trésor et Objet est validé sur un jet de 4, 5 ou 6</div>
        </div>

        {/* détrousseur */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">détrousseur</span>
            <span className="text-sm">(2XP)</span>
          </div>
          <div>
            Jet d'un dé Personnage après la mort d’un monstre, <br />
            4-5-6 = vol de 2 pièces d'or
          </div>
        </div>

        {/* dresseur */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">dresseur</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Jet d'un dé Personnage sur une carte Objet de type Animal (corbeau, loup...) <br />
            X-2-3 = échec, la carte doit être résolue normalement <br />
            4-5-6 = la carte peut être directement prise
          </div>
        </div>

        {/* second souffle */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">second souffle</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            Si la fin du tour de combat devrait aboutir à la mort du voleur, il peut utiliser une potion de perception
            avant d'encaisser le coup de l'adversaire, <br />
            il fait un jet de dé Personnage et gagne le nombre de PV indiqué sur le dé (X = 1 PV)
          </div>
        </div>

        {/* coup de grâce */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">coup de grâce</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>
            À la fin du tour d'attaque, si le monstre a 6 PV ou moins, le voleur peut utiliser une potion de perception
            et faire un jet de dé supplémentaire, <br />
            il retire le nombre de PV indiqué sur le dé (X = 1 PV)
          </div>
        </div>

        {/* furtivité */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">furtivité</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>La potion de perception valide les lancers échoués de Négociation ou de Vol à l’étalage</div>
        </div>

        {/* passage secret */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">passage secret</span>
            <span className="text-sm">(1XP)</span>
          </div>
          <div>Peut utiliser une potion de perception pour intervertir la position de 2 salles adjacentes</div>
        </div>

        {/* troisième oeil */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">troisième oeil</span>
            <span className="text-sm">(Niveau 3 ; 2XP)</span>
          </div>
          <div>Immunité à l’aveuglement</div>
        </div>

        {/* bonne fortune */}
        <div>
          <div>
            <span className="skill-rogue mr-2 text-lg">bonne fortune</span>
            <span className="text-sm">(Niveau 3 ; 3XP)</span>
          </div>
          <div>Peut relancer le dé Donjon, quelle que soit la salle, pour 3 pièces d'or</div>
        </div>
      </div>

      <div className="flex justify-center my-6">○ ○ ○</div>

      <div className="text-base font-semibold underline mb-2">Précisions sur les compétences</div>

      {/* ================================ PRECISIONS ================================ */}
      <div className="flex flex-col gap-4">
        <div>
          Utilisation des compétences <span className="skill-rogue">négociation</span> et{" "}
          <span className="skill-rogue">vol à l'étalage</span> : <br />
          - l'objet de la transaction doit être annoncée avant le jet de dé <br />
          - il faut posséder les fonds nécessaires pour payer le prix original en cas d'échec (si le dé est lancé, la
          transaction ne peut pas être annulée) <br />
          - les transactions effectuées sont limitées au nombre de dés Personnage possédés : chaque dé Personnage ne
          peut être utilisé qu'une fois par passage chez le marchand. <br />
          - chaque transaction peut s’effectuer avec 1 dé Personnage mais tous les dés possédés peuvent être utilisés en
          une fois pour augmenter les chances de succès. Le dé le plus grand détermine le résultat. <br />- Vol à
          l’étalage correspond à la suite de la transaction entamée avec Négociation, cette compétence utilise les mêmes
          dés qui ont été utilisés lors du jet de Négociation.
        </div>

        <div>
          La compétence <span className="skill-rogue">bonne fortune</span> peut être utilisée plusieurs fois d'affilée,
          même en combat, tant que le voleur a les pièces d'or nécessaires.
        </div>

        <div>
          La compétence <span className="skill-rogue">second souffle</span> peut être répétée tant que le voleur possède
          les potions nécessaires, jusqu'à ce que ses PV lui permettent d'encaisser l'attaque.
        </div>

        <div>
          La compétence <span className="skill-rogue">coup de grâce</span> ne peut être utilisée qu'une fois par tour de
          combat, même si elle n'aboutit pas à la mort du monstre.
        </div>

        <div>
          La compétence <span className="skill-rogue">détrousseur</span> peut s’effectuer après avoir battu un monstre
          ou un Boss. Elle ne peut pas s’effectuer sur le Fantôme. <br />
          Deux joueurs peuvent effectuer cette compétence sur le même monstre battu.
        </div>
      </div>
    </div>
  );
};

export default RogueDescription;
