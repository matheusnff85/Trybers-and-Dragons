"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(_name) {
        this._name = _name;
        this._dexterity = (0, utils_1.default)(1, 10);
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._race = new Races_1.Elf(this._name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(this._name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return {
            amount: this._energy.amount,
            type_: this._energy.type_,
        };
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0) {
            this._lifePoints -= damage;
            if (this._lifePoints <= 0) {
                this._lifePoints = -1;
            }
        }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
    }
    special(enemy) {
        console.log(`
    ${this._name} está rindo da sua cara, você leva 1 de dano moral`);
        if ('defense' in enemy) {
            enemy.receiveDamage(enemy.defense + 1);
        }
        else {
            enemy.receiveDamage(1);
        }
    }
}
exports.default = Character;
