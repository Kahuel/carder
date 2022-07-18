export interface Abilities {
  name: string;
}

export interface Action {
  damage?: { value: number; target: "player" | "enemy" };
  heal?: { value: number; target: "player" | "enemy" };
}

export interface Actions {
  [key: string]: Action;
}

export interface Effect {
  stat: string;
  value: number;
  duration: number;
}

export interface Character {
  name: string;
  strength: number;
  hp: number;
  effects: Effect[];
  abilities: [];
}

export interface EnemyType extends Character {
  pattern: string[];
}

export interface PlayerType extends Character {
  xp: number;
  items: [];
}

export interface CombatState {
  player: PlayerType;
  enemy: EnemyType;
  turn: number;
}
