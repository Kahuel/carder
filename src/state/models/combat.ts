import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { CombatState } from "types";
import { getEnemy } from "enemies/utils";

export const combat = createModel<RootModel>()({
  state: {} as CombatState,
  reducers: {
    updateCombat: (state, payload: CombatState) => {
      return { ...payload };
    },
  },
  effects: (dispatch) => ({
    initBattle: (_: void, state) => {
      dispatch.combat.updateCombat({ player: { ...state.player }, enemy: getEnemy(), turn: 1 });
    },
  }),
});
