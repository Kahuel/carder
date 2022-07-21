import { EnemyType } from "types";

export const enemies: EnemyType[] = [
  { name: "rat", strength: 2, hp: 3, abilities: [], effects: [], pattern: ["attack"] },
  { name: "goblin", strength: 1, hp: 4, abilities: [], effects: [], pattern: ["attack", "stoneThrow"] },
];
