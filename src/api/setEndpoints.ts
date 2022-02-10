import {
    postPlayer,
    getOnlinePlayers,
    getPlayer,
    getPlayers
} from "./handlers/players"


export const setEndpoints = (): void => {
    getOnlinePlayers();
    getPlayers();
    getPlayer();
    postPlayer();
}