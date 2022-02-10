export class Ship {
    id: number;
    name: string;
    fullName: string;
    shipTypeId: number;
    cargoSpace: number;

    constructor(ship?) {
        ship = ship || {};
        this.id = ship.id || null;
        this.name = ship.name || "";
        this.fullName = ship.fullName || "";
        this.shipTypeId = ship.shipTypeId || null;
        this.cargoSpace = ship.cargoSpace || null;
    }
}
