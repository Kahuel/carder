import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { PlayerType } from "types";

const defaultPlayer: PlayerType = {
  name: "Player",
  strength: 1,
  hp: 10,
  effects: [],
  abilities: [],
  enemyKilled: 0,
  xp: 0,
  items: [],
  actions: ["attack", "attack", "stoneThrow"],
  energy: 2,
};

export const player = createModel<RootModel>()({
  state: defaultPlayer as PlayerType,
  reducers: {
    updateGlobalPlayer: (state, payload: PlayerType) => ({ ...payload }),
  },
  effects: (dispatch) => ({
    addToKilledCounter: (_: void, state) => {
      const newPlayer: PlayerType = { ...state.player, enemyKilled: state.player.enemyKilled + 1 };
      dispatch.player.updateGlobalPlayer(newPlayer);
    },
    playerDied: () => {
      dispatch.player.updateGlobalPlayer({ ...defaultPlayer });
    },
  }),
});
