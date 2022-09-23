import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public _fighter1: Fighter;
  public _fighter2: Fighter;
  constructor(figther1: Fighter, fighter2: Fighter) {
    super(figther1);
    this._fighter1 = figther1;
    this._fighter2 = fighter2;
  }

  public fight(): number {
    if (this._fighter1.lifePoints > 0 && this._fighter2.lifePoints > 0) {
      this._fighter1.attack(this._fighter2);
      this._fighter2.attack(this._fighter1);
    }
    return super.fight();
  }
}