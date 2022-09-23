import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public _fighter: Fighter;
  public _monsters: (SimpleFighter | Fighter)[];

  constructor(fighter: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  public fight(): number {
    const monstersAlive = this._monsters
      .filter((monster) => monster.lifePoints > 0);
    if (this._fighter.lifePoints > 0 && monstersAlive.length > 0) {
      this._fighter.attack(monstersAlive[Math
        .floor(Math.random() * monstersAlive.length)]);
      monstersAlive.map((monster) => monster.attack(this._fighter));
    }
    return super.fight();
  }
}