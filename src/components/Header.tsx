import MenuButton from "./MenuButton";
import { useState, SyntheticEvent } from "react";
import { Character, useCharacter, useCharacterDispatch } from "../characterContext";
import { useLocation, useNavigate } from "react-router-dom";

const classes: { name: Character["class"]; icon: string }[] = [
  { name: "Knight", icon: "/class-knight.png" },
  { name: "Wizard", icon: "/class-wizard.png" },
  { name: "Healer", icon: "/class-healer.png" },
  { name: "Rogue", icon: "/class-rogue.png" },
];

export const Header = () => {
  const character = useCharacter();
  const dispatch = useCharacterDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [showClassesList, setShowClassesList] = useState(false);

  const chooseClass = (e: SyntheticEvent, newCharacterClass: Character["class"]) => {
    dispatch({ type: "changeClass", class: newCharacterClass });
    navigate("/tree");

    setShowClassesList(false);

    e.stopPropagation();
  };

  const toggleClassesList = () => {
    setShowClassesList(!showClassesList);
  };

  const handleOverlayClick = () => {
    setShowClassesList(false);
  };

  const hasChosenClass = character.class != undefined;

  const activePathname = showClassesList ? "" : location.pathname;

  const usedXPColor = character.usedXP > character.gainedXP ? "text-red-600" : "";

  return (
    <div className="uppercase text-center">
      <div className="h-36 grid grid-cols-6 grid-rows-2 gap-2">
        <div className="row-span-2 col-span-2">
          <MenuButton href="/rules" active={activePathname === "/rules"}>
            compléments et modifications des règles du jeu
          </MenuButton>
        </div>

        <div className="col-span-4 flex gap-1">
          <div className="flex-grow">
            <MenuButton onClick={toggleClassesList} active={showClassesList}>
              choisissez une classe
            </MenuButton>
          </div>

          <div className="h-16 w-16 mt-0.5 flex-none">
            {hasChosenClass && (
              <div onClick={toggleClassesList}>
                <img src={classes.find((item) => item.name == character.class)!.icon} alt="img" />
              </div>
            )}
          </div>
        </div>

        {showClassesList && (
          <div className="fixed w-full h-full" onClick={handleOverlayClick}>
            <div className="absolute top-0 right-1.5 flex flex-col gap-2 bg-black p-0.5 rounded-bl-lg">
              {classes.map((item) => (
                <div key={item.name} className="h-16 w-16" onClick={(e) => chooseClass(e, item.name)}>
                  <img src={item.icon} alt="img" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="col-span-2">
          <MenuButton href="/tree" active={activePathname === "/tree"} disabled={!hasChosenClass}>
            arbre de compétences
          </MenuButton>
        </div>

        <div className="col-span-2">
          <MenuButton href="/description" active={activePathname === "/description"} disabled={!hasChosenClass}>
            descriptions
          </MenuButton>
        </div>
      </div>

      <div
        className="h-30 flex justify-around"
        style={{
          borderImage: `url(/back-parchment.png)`,
          borderImageSlice: "15 fill",
          borderWidth: 15,
          borderImageRepeat: "round",
        }}
      >
        <div>
          <div className="flex items-center justify-center font-semibold">
            <img src="/header/xp-icon.png" alt="img" className="h-10" />
            <span className="ml-2">acquis</span>
          </div>
          <div className="flex gap-1 justify-center mt-2">
            <img
              src="/header/xp-button-minus.png"
              alt="img"
              className="h-10 w-7"
              onClick={() => dispatch({ type: "decrementXP" })}
            />
            <div
              className="h-10 w-10 bg-cover flex items-center justify-center font-semibold text-2xl pb-2 select-none"
              style={{
                backgroundImage: "url(/header/xp-back.png)",
                fontFamily: "Playfair Display",
              }}
            >
              {character.gainedXP}
            </div>
            <img
              src="/header/xp-button-plus.png"
              alt="img"
              className="h-10 w-7"
              onClick={() => dispatch({ type: "incrementXP" })}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center font-semibold">
            <img src="/header/xp-icon.png" alt="img" className="h-10" />
            <span className="ml-2">utilisés</span>
          </div>
          <div className="flex gap-1 justify-center mt-2">
            <div
              className={`h-10 w-10 bg-cover flex items-center justify-center font-semibold text-2xl pb-2 select-none ${usedXPColor}`}
              style={{
                backgroundImage: "url(/header/xp-back.png)",
                fontFamily: "Playfair Display",
              }}
            >
              {character.usedXP}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
