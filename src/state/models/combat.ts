import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Action, CombatState } from "types";
import { getEnemy } from "enemies/utils";
import { actions } from "components/actions/actions";

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
    playerAction: (payload: string, state) => {
      const combatPlayer = state.combat.player;
      const combatEnemy = state.combat.enemy;
      const { hp: playerHP, strength: playerStrength } = combatPlayer;
      const { heal = 0, damage = 0 }: Action = actions(playerStrength, playerHP)[payload];
      const newState: CombatState = {
        player: { ...combatPlayer, hp: playerHP + heal },
        enemy: { ...combatEnemy, hp: combatEnemy.hp - damage },
        turn: state.combat.turn + 1,
      };
      dispatch.combat.updateCombat(newState);
    },
  }),
});
