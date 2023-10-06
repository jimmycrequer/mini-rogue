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
