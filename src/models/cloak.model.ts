export class Cloak {
    id: number;
    name: string;
    duration: number;
    chargeTime: number;
    requiredCargo: number;

    constructor(cloak?) {
        cloak = cloak || {};
        this.id = cloak.id || null;
        this.name = cloak.name || "";
        this.duration = cloak.duration || null;
        this.chargeTime = cloak.chargeTime || null;
        this.requiredCargo = cloak.requiredCargo || null;
    }
}
