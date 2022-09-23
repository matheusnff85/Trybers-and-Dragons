"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(figther1, fighter2) {
        super(figther1);
        this._fighter1 = figther1;
        this._fighter2 = fighter2;
    }
    fight() {
        while (this._fighter1.lifePoints > 0 && this._fighter2.lifePoints > 0) {
            this._fighter1.attack(this._fighter2);
            this._fighter2.attack(this._fighter1);
        }
        return super.fight();
    }
}
exports.default = PVP;
