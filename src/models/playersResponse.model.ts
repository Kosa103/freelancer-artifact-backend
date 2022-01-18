import { Player } from "./player.model";

export class PlayersResponse {
    error: any;
    players: Player[];
    timestamp: Date;

    constructor(playerResponse?) {
        playerResponse = playerResponse || {};
        this.error = playerResponse.error || null;
        this.players = playerResponse.players ? playerResponse.players.map(player => new Player(player)) : [];
        this.timestamp = playerResponse.timestamp || new Date();
    }
}