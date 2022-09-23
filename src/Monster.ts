import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _strength: number;
  private _lifePoints: number;

  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}