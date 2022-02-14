import {
    postPlayer,
    getOnlinePlayers,
    getPlayer,
    getPlayers,
    putPlayer
} from "./handlers/players"
import { createUser, loginUser } from "./handlers/users";


export const setEndpoints = (): void => {
    getOnlinePlayers();
    getPlayers();
    getPlayer();
    postPlayer();
    putPlayer();

    createUser();
    loginUser();
}