import { FC } from "react";

const Rules: FC = () => {
  return (
    <div>
      <div className="text-center">
        <div className="uppercase text-xl font-bold">arbres de compétences</div>
        <div className="font-bold text-base">Compléments et modifications des règles du jeu</div>
      </div>

      <div className="text-left">
        <div className="text-base font-semibold underline mt-8 mb-2">Classes et personnages</div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <img src="/class-healer.png" alt="img" className="h-6 mr-2" />
            <span>Guérisseurs : Clerc et Prêtresse</span>
          </div>
          <div className="flex items-center">
            <img src="/class-knight.png" alt="img" className="h-6 mr-2" />
            <span>Chevaliers : Croisé et Bone</span>
          </div>
          <div className="flex items-center">
            <img src="/class-wizard.png" alt="img" className="h-6 mr-2" />
            <span>Magiciens : Mage et Sorcière</span>
          </div>
          <div className="flex items-center">
            <img src="/class-rogue.png" alt="img" className="h-6 mr-2" />
            <span>Voleurs : Rogue et Voleur</span>
          </div>
        </div>
      </div>

      <div className="text-base font-semibold underline mt-8 mb-2">Statistiques</div>

      <div>
        <p>
          Les magiciens et les voleurs ont moins de PV et moins de points d'armure que les chevaliers et les guérisseurs
          (cf plateau des joueurs).
        </p>
        <p>
          Ils ont également une armure moins résistante que les chevaliers et les guérisseurs. Une attaque ennemie
          transperce leur armure sur des jets de dé Donjon (noir) de 5 ou 6.
        </p>
        <p className="mt-4">
          Les chevaliers peuvent stocker jusqu'à 5 rations, soit une ration de plus que les autres classes.
        </p>
        <p className="mt-4">
          <span>Les voleurs peuvent ramasser et conserver 2 cartes </span>
          <img src="/rules/object.png" alt="img" className="h-6 inline mr-1" />
          <span>(objet ou animal) simultanément.</span>
        </p>
      </div>

      <div className="text-base font-semibold underline mt-8 mb-2">Potions</div>

      <div className="flex flex-col gap-6">
        <div>
          <p>
            <img src="/class-wizard.png" alt="img" className="h-6 mr-1 inline" />
            <span className="font-semibold underline">Les magiciens</span>
          </p>
          <p>
            Les magiciens ont accès à toutes les potions et peuvent utiliser librement 2 cubes de potion sur les
            différents sorts.
          </p>
          <p className="mt-4">
            Lorsqu'ils accèdent à leur 3ème cube de potion (compétence{" "}
            <span className="skill-wizard">triple potion</span>
            ), celui-ci doit être utilisé sur la 2ème barre de sort (compétence{" "}
            <span className="skill-wizard">double sorts</span>
            ).
          </p>
        </div>

        <div>
          <p>
            <img src="/class-healer.png" alt="img" className="h-6 mr-1 inline" />
            <span className="font-semibold underline">Les guérisseurs</span>
          </p>
          <p>
            Les guérisseurs ont accès aux potions d'attaque (feu, glace et poison), ainsi qu'aux potions de soin et
            bénédiction.
          </p>
          <p>
            Ils ne peuvent utiliser qu'un seul cube de potion sur la ligne des sorts d'attaque, mais ils peuvent
            utiliser leurs 2 cubes de potion simultanément sur la ligne des sorts de soin et bénédiction.
          </p>
          <p className="mt-4">
            Lorsqu'ils accèdent à leur 3ème cube de potion (compétence{" "}
            <span className="skill-healer">triple potion</span>
            ), celui-ci doit être utilisé sur la 2ème barre de soin (compétence{" "}
            <span className="skill-healer">double soins</span>
            ).
          </p>

          <p className="mt-4">
            Seuls les guérisseurs peuvent utiliser leurs potions de soin et de bénédiction sur les autres joueurs
            (compétence <span className="skill-healer">philanthrope</span>), même s'ils se trouvent dans une autre
            salle.
          </p>
        </div>

        <div>
          <p>
            <img src="/class-knight.png" alt="img" className="h-6 mr-1 inline" />
            <span className="font-semibold underline">Les chevaliers</span>
          </p>
          <p>Les chevaliers ont accès à des potions de malédiction, ainsi qu'aux potions de soin et bénédiction.</p>
          <p className="mt-4">
            Un cube de potion évolue de gauche à droite sur la ligne des potions de malédictions. Ils peuvent donc
            stocker jusqu'à 2 potions de malédiction. Ces potions peuvent être obtenues grâce à la compétence{" "}
            <span className="skill-knight">malédiction</span> ou être achetées chez le marchand.
          </p>
          <p className="mt-4">
            L'autre cube de potion peut être utilisé uniquement sur les potions de soin et de bénédiction.
          </p>
        </div>

        <div>
          <p>
            <img src="/class-rogue.png" alt="img" className="h-6 mr-1 inline" />
            <span className="font-semibold underline">Les voleurs</span>
          </p>
          <p>Les voleurs ont accès à des potions de perception, ainsi qu'aux potions de soin et bénédiction.</p>
          <p className="mt-4">
            Un cube de potion évolue de gauche à droite sur la ligne des potions de perception. Ils peuvent donc stocker
            jusqu'à 3 potions de perception.
          </p>
          <p className="mt-4">
            L'autre cube de potion peut être utilisé uniquement sur les potions de soin et de bénédiction.
          </p>

          <p className="mt-4">
            Seuls les voleurs peuvent utiliser leurs potions de perception sur les autres joueurs pour guérir
            l'aveuglement (compétence <span className="skill-rogue">bienveillance</span>
            ), même s'ls se trouvent dans une autre salle.
          </p>
          <p>
            Les potions de perception peuvent également être utilisées pour valider les tests de compétence du 2ème
            joueur si le voleur se trouve dans la même salle.
          </p>
        </div>
      </div>

      <div className="text-base font-semibold underline mt-8 mb-2">Arbres de compétences</div>

      <div>
        <p>
          Les arbres de compétences sont accessibles à partir du Niveau 2 et chaque compétence est activée grâce aux
          points d'XP que le joueur accumule.
        </p>

        <p>
          Certaines compétences sont actives dès le Niveau 1 ou le deviennent automatiquement au Niveau 2 (sans
          utilisation de points d'XP), d'autres sont activables uniquement à partir du Niveau 3.
        </p>

        <p>
          Les compétences peuvent être activées librement quand le besoin se présente, même pendant un combat, si le
          joueur a les points d'XP nécessaires.
        </p>

        <p>
          Il n'y a pas d'ordre d'acquisition préétabli mais lorsque des compétences sont liées par une ligne sur
          l'arbre, il faut activer les compétences de gauche à droite.
        </p>

        <p>
          Si une compétence reçoit plusieurs lignes, toutes les compétences à gauche doivent être activées en priorité.
        </p>

        <p className="mt-4">Il faut 23 points d'XP pour compléter un arbre de compétences.</p>

        <p>
          Lors de l'activation d'une compétence, les points d'XP ne sont pas utilisés physiquement (le cube d'XP ne
          bouge pas sur le plateau joueur), référez-vous aux compteurs de points d'XP au-dessus de l'arbre de
          compétences.
        </p>

        <p>
          Le compteur de gauche "XP acquis" doit être augmenté manuellement, il représente le nombre maximum d'XP
          atteint pendant la partie.
        </p>

        <div className="my-2 flex justify-center">
          <img src="/rules/xp-gained.png" alt="img" className="h-14" />
        </div>

        <p>
          Le compteur de droite "XP utilisés" augmente directement après l'activation d'une compétence. Assurez-vous
          d'avoir acquis assez de points d'XP pour activer une compétence.
        </p>

        <div className="my-2 flex justify-center">
          <img src="/rules/xp-used.png" alt="img" className="h-14" />
        </div>

        <p>
          La perte de points d'XP dans une salle piège ou lors d'un combat ne diminue pas la quantité de points d'XP
          utilisables pour activer les compétences (ne diminuez pas la valeur des XP acquis). Cependant, il faudra
          regagner les points d'XP perdus avant de pouvoir en accumuler en plus.
        </p>
      </div>
    </div>
  );
};

export default Rules;
