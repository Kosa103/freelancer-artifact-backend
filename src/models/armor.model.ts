export class Armor {
    id: number;
    name: string;
    multiplier: number;
    requiredCargo: number;
    price: number;

    constructor(armor?) {
        armor = armor || {};
        this.id = armor.id || null;
        this.name = armor.name || "";
        this.multiplier = armor.multiplier || null;
        this.requiredCargo = armor.requiredCargo || null;
        this.price = armor.price || null;
    }
}
