import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { PlayerType } from "types";

export const player = createModel<RootModel>()({
  state: { name: "Player", strength: 1, hp: 10, effects: [], abilities: [], xp: 0, items: [] } as PlayerType,
  reducers: {},
  effects: (dispatch) => ({}),
});
