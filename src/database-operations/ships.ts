import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Ship } from "../models/ship.model";
import { SQL_SHIPS } from "../sql-commands/ships"


export const selectAllShips = async (): Promise<Ship[]> => {
    try {
        const ships = await promisifyDbAll(SQL_SHIPS.SELECT_ALL);
        return ships.map(ship => new Ship(ship));
    } catch (err) {
        return err;
    }
};

export const selectShipById = async (id: string|number): Promise<Ship> => {
    try {
        const ship = await promisifyDbGet(SQL_SHIPS.SELECT_BY_ID, { $id: id });
        return ship ? new Ship(ship) : null;
    } catch (err) {
        return err;
    }
};

export const insertShipFull = async ({
    name,
    fullName,
    shipTypeId,
    cargoSpace,
}) => {
    try {
        const newShipId = await promisifyDbRun(SQL_SHIPS.INSERT_FULL, {
            $name: name,
            $fullName: fullName,
            $shipTypeId: shipTypeId,
            $cargoSpace: cargoSpace,
        });
        if (!newShipId) {
            throw new Error("Database error! Failed to insert new ship");
        }
        const ship = await promisifyDbGet(SQL_SHIPS.SELECT_BY_ID, { $id: newShipId });
        return ship ? new Ship(ship) : null;
    } catch (err) {
        return err;
    }
};

export const updateShipFull = async ({
    id,
    name,
    fullName,
    shipTypeId,
    cargoSpace,
}) => {
    try {
        const newShipId = await promisifyDbRun(SQL_SHIPS.UPDATE_FULL, {
            $id: id,
            $name: name,
            $fullName: fullName,
            $shipTypeId: shipTypeId,
            $cargoSpace: cargoSpace,
        });
        if (!newShipId) {
            throw new Error("Database error! Failed to update ship");
        }
        const ship = await promisifyDbGet(SQL_SHIPS.SELECT_BY_ID, { $id: newShipId });
        return ship ? new Ship(ship) : null;
    } catch (err) {
        return err;
    }
};
