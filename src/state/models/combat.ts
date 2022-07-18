import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Action, CombatState } from "types";
import { getEnemy } from "enemies/utils";
import { actions } from "components/actions/actions";
import { getCombatStates } from "./utils";

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

    playerAction: (actionName: string, state) => {
      const combatState = getCombatStates(state, actionName);
      const { player, enemy, playerHP, enemyHP, playerCurrentEnergy, damageDealt, healDealt, energySpend } = combatState;

      const newState: CombatState = {
        ...state.combat,
        player: { ...player, hp: playerHP + healDealt, energy: playerCurrentEnergy - energySpend },
        enemy: { ...enemy, hp: enemyHP - damageDealt },
      };
      dispatch.combat.updateCombat(newState);
    },

    endTurn: (_: void, state) => {
      const combatState = getCombatStates(state);
      const { player, enemy, turn, playerHP, enemyHP, damageDealt, healDealt, playerInitEnergy } = combatState;

      const newState: CombatState = {
        ...state.combat,
        turn: turn + 1,
        player: { ...player, hp: playerHP - damageDealt, energy: playerInitEnergy },
        enemy: { ...enemy, hp: enemyHP + healDealt },
      };
      dispatch.combat.updateCombat(newState);
    },
  }),
});
