export class Location {
    id: number;
    systemId: number;
    date: string;
    time: string;
    playerId: number;

    constructor(location?) {
        location = location || {};
        this.id = location.id || null;
        this.systemId = location.systemId || null;
        this.date = location.date || "";
        this.time = location.time || "";
        this.playerId = location.playerId || null;
    }
}
