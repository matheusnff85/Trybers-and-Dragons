"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(fighter, monsters) {
        if (monsters.length < 1) {
            throw new Error('At least one monster is expected!');
        }
        super(fighter);
        this._fighter = fighter;
        this._monsters = monsters;
    }
    fight() {
        const monstersAlive = this._monsters
            .filter((monster) => monster.lifePoints > 0);
        while (this._fighter.lifePoints > 0 && monstersAlive.length > 0) {
            this._fighter.attack(monstersAlive[Math
                .floor(Math.random() * monstersAlive.length)]);
            monstersAlive.map((monster) => monster.attack(this._fighter));
        }
        return super.fight();
    }
}
exports.default = PVE;
