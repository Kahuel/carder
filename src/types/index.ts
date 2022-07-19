export interface Abilities {
  name: string;
}

export interface Action {
  damage?: number;
  heal?: number;
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
  actions: string[];
}

export interface CombatState {
  player: PlayerType;
  enemy: EnemyType;
  turn: number;
}
