import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Player } from "../models/player.model";
import { SQL_PLAYERS } from "../sql-commands/players"


export const selectAllPlayers = async (): Promise<Player[]> => {
    try {
        const players = await promisifyDbAll(SQL_PLAYERS.SELECT_ALL);
        return players.map(player => new Player(player));
    } catch (err) {
        return err;
    }
};

export const selectPlayerById = async (id: string): Promise<Player> => {
    try {
        const player = await promisifyDbGet(SQL_PLAYERS.SELECT_BY_ID, { $id: id });
        return player ? new Player(player) : null;
    } catch (err) {
        return err;
    }
};

export const selectPlayerByName = async (name: string): Promise<Player> => {
    try {
        const player = await promisifyDbGet(SQL_PLAYERS.SELECT_BY_NAME, { $name: name });
        return player ? new Player(player) : null;
    } catch (err) {
        return err;
    }
};

export const insertPlayerFull = async ({
    name,
    level,
    description,
    shipId,
    affiliationId,
    identifierId,
    scannerId,
    armorId,
    cloakId,
}) => {
    try {
        const newPlayerId = await promisifyDbRun(SQL_PLAYERS.INSERT_FULL, {
            $name: name,
            $level: level,
            $description: description,
            $updatedAtDate: new Date().toISOString().split("T")[0],
            $shipId: shipId,
            $affiliationId: affiliationId,
            $identifierId: identifierId,
            $scannerId: scannerId,
            $armorId: armorId,
            $cloakId: cloakId,
        });
        if (!newPlayerId) {
            throw new Error("Database error! Failed to insert new player");
        }
        const player = await promisifyDbGet(SQL_PLAYERS.SELECT_BY_ID, { $id: newPlayerId });
        return player ? new Player(player) : null;
    } catch (err) {
        return err;
    }
};

export const updatePlayerFull = async ({
    id,
    name,
    level,
    description,
    shipId,
    affiliationId,
    identifierId,
    scannerId,
    armorId,
    cloakId,
}) => {
    try {
        const newPlayerId = await promisifyDbRun(SQL_PLAYERS.UPDATE_FULL, {
            $id: id,
            $name: name,
            $level: level,
            $description: description,
            $updatedAtDate: new Date().toISOString().split("T")[0],
            $shipId: shipId,
            $affiliationId: affiliationId,
            $identifierId: identifierId,
            $scannerId: scannerId,
            $armorId: armorId,
            $cloakId: cloakId,
        });
        if (!newPlayerId) {
            throw new Error("Database error! Failed to update player");
        }
        const player = await promisifyDbGet(SQL_PLAYERS.SELECT_BY_ID, { $id: newPlayerId });
        return player ? new Player(player) : null;
    } catch (err) {
        return err;
    }
};
