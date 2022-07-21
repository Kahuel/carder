import { EnemyType } from "types";
import { enemies } from "./enemies";

export const getEnemy = (): EnemyType => {
  return enemies[Math.floor(Math.random() * enemies.length)];
};
