import { Actions } from "types";
import { regenerationCalculator } from "./utils";

export const actions = (strength: number, hp: number): Actions => ({
  attack: { damage: strength, cost: 1 },
  stoneThrow: { damage: strength + 2, cost: 2 },
  regeneration: { heal: regenerationCalculator(hp), cost: 1 },
});

export const actionsCost: { [key: string]: number } = {
  attack: 1,
  stoneThrow: 2,
  regeneration: 1,
};
