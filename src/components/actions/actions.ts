import { Actions } from "types";

export const actions = (strength: number, hp: number): Actions => ({
  attack: { damage: { value: strength, target: "player" } },
  stoneThrow: { damage: { value: strength + 2, target: "player" } },
  regeneration: { heal: { value: 1, target: "enemy" } },
});
