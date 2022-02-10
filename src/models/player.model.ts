export class Player {
    id: number;
    name: string;
    level: number;
    description: string;
    updatedAtDate: string;
    shipId: number;
    affiliationId: number;
    identifierId: number;
    scannerId: number;
    armorId: number;
    cloakId: number;

    constructor(player?) {
        player = player || {};
        this.id = player.id || null;
        this.name = player.name || "";
        this.level = player.level || null;
        this.description = player.description || "";
        this.updatedAtDate = player.updatedAtDate || "";
        this.shipId = player.shipId || null;
        this.affiliationId = player.affiliationId || null;
        this.identifierId = player.identifierId || null;
        this.scannerId = player.scannerId || null;
        this.armorId = player.armorId || null;
        this.cloakId = player.cloakId || null;
    }
}
