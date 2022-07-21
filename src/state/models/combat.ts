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

    playerAction: (actionName: string, state) => {
      const combatPlayer = state.combat.player;
      const combatEnemy = state.combat.enemy;
      const { hp: playerHP, strength: playerStrength, energy: playerEnergy } = combatPlayer;
      const { heal = 0, damage = 0, cost = 1 }: Action = actions(playerStrength, playerHP)[actionName];

      const newState: CombatState = {
        ...state.combat,
        player: { ...combatPlayer, hp: playerHP + heal, energy: playerEnergy - cost },
        enemy: { ...combatEnemy, hp: combatEnemy.hp - damage },
      };
      dispatch.combat.updateCombat(newState);
    },

    endTurn: (_: void, state) => {
      const combatPlayer = state.combat.player;
      const combatEnemy = state.combat.enemy;
      const { hp: enemyHP, strength: enemyStrength, pattern } = combatEnemy;
      const actionName = pattern[(state.combat.turn - 1) % pattern.length];
      const { heal = 0, damage = 0 }: Action = actions(enemyStrength, enemyHP)[actionName];

      const newState: CombatState = {
        ...state.combat,
        player: { ...combatPlayer, hp: combatPlayer.hp - damage, energy: state.player.energy },
        enemy: { ...combatEnemy, hp: combatEnemy.hp + heal },
      };
      dispatch.combat.updateCombat(newState);
    },
  }),
});
