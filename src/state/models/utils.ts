import { RootState } from "state";

export const getCombatStates = (state: RootState) => {
  const combatPlayer = state.combat.player;
  const combatEnemy = state.combat.enemy;
  const { hp: playerHP, strength: playerStrength, energy: playerEnergy } = combatPlayer;
};
