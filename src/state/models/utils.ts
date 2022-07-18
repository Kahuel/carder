import { RootState } from "state";
import { actions } from "components/actions/actions";
import { Action } from "types";

export const getCombatStates = (state: RootState, actionName?: string) => {
  const { player, enemy, turn } = state.combat;
  const { energy: playerInitEnergy } = state.player;
  const { hp: playerHP, strength: playerStrength, energy: playerCurrentEnergy } = player;
  const { hp: enemyHP, strength: enemyStrength, pattern } = enemy;
  const enemyActionName = pattern[(turn - 1) % pattern.length];

  const currentAction = actionName ? actions(playerStrength, playerHP)[actionName] : actions(enemyStrength, enemyHP)[enemyActionName];

  const { heal: healDealt = 0, damage: damageDealt = 0, cost: energySpend = 1 }: Action = currentAction;

  return { player, enemy, turn, playerHP, playerCurrentEnergy, playerInitEnergy, enemyHP, damageDealt, healDealt, energySpend };
};
