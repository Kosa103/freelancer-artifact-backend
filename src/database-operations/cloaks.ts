import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Cloak } from "../models/cloak.model";
import { SQL_CLOAKS } from "../sql-commands/cloaks"


export const selectAllCloaks = async (): Promise<Cloak[]> => {
    try {
        const cloaks = await promisifyDbAll(SQL_CLOAKS.SELECT_ALL);
        return cloaks.map(cloak => new Cloak(cloak));
    } catch (err) {
        return err;
    }
};

export const selectCloakById = async (id: string|number): Promise<Cloak> => {
    try {
        const cloak = await promisifyDbGet(SQL_CLOAKS.SELECT_BY_ID, { $id: id });
        return cloak ? new Cloak(cloak) : null;
    } catch (err) {
        return err;
    }
};

export const insertCloakFull = async ({
    name,
    duration,
    chargeTime,
    requiredCargo,
}) => {
    try {
        const newCloakId = await promisifyDbRun(SQL_CLOAKS.INSERT_FULL, {
            $name: name,
            $duration: duration,
            $chargeTime: chargeTime,
            $requiredCargo: requiredCargo,
        });
        if (!newCloakId) {
            throw new Error("Database error! Failed to insert new cloak");
        }
        const cloak = await promisifyDbGet(SQL_CLOAKS.SELECT_BY_ID, { $id: newCloakId });
        return cloak ? new Cloak(cloak) : null;
    } catch (err) {
        return err;
    }
};

export const updateCloakFull = async ({
    id,
    name,
    duration,
    chargeTime,
    requiredCargo,
}) => {
    try {
        const newCloakId = await promisifyDbRun(SQL_CLOAKS.UPDATE_FULL, {
            $id: id,
            $name: name,
            $duration: duration,
            $chargeTime: chargeTime,
            $requiredCargo: requiredCargo,
        });
        if (!newCloakId) {
            throw new Error("Database error! Failed to update cloak");
        }
        const cloak = await promisifyDbGet(SQL_CLOAKS.SELECT_BY_ID, { $id: newCloakId });
        return cloak ? new Cloak(cloak) : null;
    } catch (err) {
        return err;
    }
};
