export class PlayerLocation {
    name: string;
    system: string;
    region: string;
    time: string;
    currentTime: Date;

    constructor(player?) {
        player = player || {};
        this.name = player.name || "";
        this.system = player.system || "";
        this.region = player.region || "";
        this.time = player.time || "";
        this.currentTime = player.currentTime || new Date();
    }
}