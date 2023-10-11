export type TSkill = {
  id: number;
  name: string;
  level: number;
  cost: number;
  auto: boolean;
  requires?: number[];
};

export const KnightSkills: TSkill[] = [
  { id: 1, name: "maître d'armes", level: 2, cost: 1, auto: false },
  { id: 2, name: "boucher", level: 2, cost: 1, auto: false },
  { id: 3, name: "malédiction", level: 1, cost: 0, auto: true },
  { id: 4, name: "pas de gâchis", level: 2, cost: 0, auto: true },
  { id: 5, name: "avant-garde", level: 2, cost: 0, auto: true },
  { id: 6, name: "festin", level: 2, cost: 2, auto: false },
  { id: 7, name: "tératovore", level: 2, cost: 2, auto: false, requires: [6] },
  { id: 8, name: "berserk", level: 2, cost: 0, auto: true },
  { id: 9, name: "immunité", level: 2, cost: 2, auto: false, requires: [8] },
  { id: 10, name: "bonus d'armure", level: 2, cost: 3, auto: false },
  {
    id: 11,
    name: "bonus d'armure",
    level: 2,
    cost: 3,
    auto: false,
    requires: [10],
  },
  {
    id: 12,
    name: "peau de fer",
    level: 3,
    cost: 3,
    auto: false,
    requires: [8, 11],
  },
  { id: 13, name: "prouesse efficace", level: 2, cost: 3, auto: false },
  {
    id: 14,
    name: "armure efficace",
    level: 3,
    cost: 3,
    auto: false,
    requires: [11, 13],
  },
];

export const HealerSkills: TSkill[] = [
  { id: 1, name: "apothicaire 1", level: 2, cost: 1, auto: false },
  { id: 2, name: "apothicaire 2", level: 2, cost: 1, auto: false },
  { id: 3, name: "double soins", level: 2, cost: 2, auto: false },
  { id: 4, name: "triple potions", level: 3, cost: 3, auto: false, requires: [3] },
  { id: 5, name: "armure divine", level: 2, cost: 3, auto: false },
  { id: 6, name: "sanctification", level: 1, cost: 0, auto: true },
  { id: 7, name: "philantrope", level: 2, cost: 0, auto: true },
  { id: 8, name: "sacrifice", level: 2, cost: 1, auto: false },
  { id: 9, name: "jeûne spirituel", level: 2, cost: 1, auto: false },
  { id: 10, name: "sagacité", level: 2, cost: 1, auto: false, requires: [9] },
  { id: 11, name: "grâce divine", level: 2, cost: 2, auto: false, requires: [10] },
  { id: 12, name: "nécromancie", level: 2, cost: 4, auto: false, requires: [9] },
  { id: 13, name: "exorcisme", level: 2, cost: 4, auto: false, requires: [12] },
]

export const WizardSkills: TSkill[] = [
  { id: 1, name: "armure magique", level: 2, cost: 3, auto: false },
  { id: 2, name: "armure magique", level: 2, cost: 3, auto: false, requires: [1] },
  { id: 3, name: "double sorts", level: 2, cost: 2, auto: false },
  { id: 4, name: "triple potions", level: 3, cost: 3, auto: false, requires: [3] },
  { id: 5, name: "professeur", level: 2, cost: 2, auto: false },
  { id: 6, name: "ambidextrie", level: 3, cost: 3, auto: false },
  { id: 7, name: "prémonition", level: 2, cost: 1, auto: false },
  { id: 8, name: "oeil du prophète", level: 3, cost: 3, auto: false, requires: [7] },
  { id: 9, name: "alchimie", level: 2, cost: 0, auto: true },
  { id: 10, name: "réduction", level: 2, cost: 1, auto: false, requires: [9] },
  { id: 11, name: "saignée", level: 2, cost: 1, auto: false, requires: [9] },
  { id: 12, name: "dépeçage", level: 2, cost: 1, auto: false, requires: [9] },
];

export const RogueSkills: TSkill[] = [];