import { Actions } from "types";

export const actions = (strength: number, hp: number): Actions => ({
  attack: { damage: strength, cost: 1 },
  stoneThrow: { damage: strength + 2, cost: 2 },
  regeneration: { heal: hp / 20 > 1 ? hp / 20 : 1, cost: 1 },
});

export const actionsCost: { [key: string]: number } = {
  attack: 1,
  stoneThrow: 2,
  regeneration: 1,
};
