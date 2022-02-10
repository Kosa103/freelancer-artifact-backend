export class ShipType {
    id: number;
    name: string;
    typicalSpeed: number;

    constructor(shipType?) {
        shipType = shipType || {};
        this.id = shipType.id || null;
        this.name = shipType.name || "";
        this.typicalSpeed = shipType.typicalSpeed || null;
    }
}
