export interface Abilities {
  name: string;
}

export interface Action {
  damage?: number;
  heal?: number;
  cost?: number;
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
  enemyKilled: number;
  xp: number;
  items: [];
  actions: string[];
  energy: number;
}

export interface CombatState {
  player: PlayerType;
  enemy: EnemyType;
  turn: number;
}
