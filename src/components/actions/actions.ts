import { Actions } from "types";

export const actions = (strength: number, hp: number): Actions => ({
  attack: { damage: strength },
  stoneThrow: { damage: strength + 2 },
  regeneration: { heal: hp / 20 > 1 ? hp / 20 : 1 },
});
