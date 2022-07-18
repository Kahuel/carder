import { Models } from "@rematch/core";
import { player } from "./player";
import { combat } from "./combat";

export interface RootModel extends Models<RootModel> {
  player: typeof player;
  combat: typeof combat;
}
export const models: RootModel = { player, combat };
