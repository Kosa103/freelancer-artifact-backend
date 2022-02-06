import { getOnlinePlayers, getPlayers } from "./handlers/players"


export const setEndpoints = (): void => {
    getOnlinePlayers();
    getPlayers();
}