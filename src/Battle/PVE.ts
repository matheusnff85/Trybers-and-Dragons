import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public _fighter: Fighter;
  public _monsters: (SimpleFighter | Fighter)[];

  constructor(fighter: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    if (monsters.length < 1) {
      throw new Error('At least one monster is expected!');
    }
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.every((monster) => {
      while (this._fighter.lifePoints > 0 && monster.lifePoints > 0) {
        this._fighter.attack(monster);
        monster.attack(this._fighter);
      }
      return this._fighter.lifePoints >= 0;
    });
    return super.fight();
  }
}