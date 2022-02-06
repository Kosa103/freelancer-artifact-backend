import { promisifyDbAll } from "../helpers/functions"
import { SQL_PLAYERS } from "../sql-commands/players"


export const selectAllPlayers = async () => {
    try {
        const players = await promisifyDbAll(SQL_PLAYERS.SELECT_ALL);
        return players;
    } catch (err) {
        return err;
    }
};
