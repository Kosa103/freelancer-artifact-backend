export class System {
    id: number;
    name: string;
    regionId: number;

    constructor(system?) {
        system = system || {};
        this.id = system.id || null;
        this.name = system.name || "";
        this.regionId = system.regionId || null;
    }
}
