import { PlayerLocation } from "./player-location.model";

export class PlayersResponse {
  error: any;
  players: PlayerLocation[];
  timestamp: string;

  constructor(playerResponse?) {
    playerResponse = playerResponse || {};
    this.error = playerResponse.error || null;
    this.players = playerResponse.players ? playerResponse.players.map(player => new PlayerLocation(player)) : [];
    this.timestamp = playerResponse.timestamp || "";
  }
}
