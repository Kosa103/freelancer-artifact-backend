import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Affiliation } from "../models/affiliation.model";
import { SQL_AFFILIATIONS } from "../sql-commands/affiliations"


export const selectAllAffiliations = async (): Promise<Affiliation[]> => {
    try {
        const affiliations = await promisifyDbAll(SQL_AFFILIATIONS.SELECT_ALL);
        return affiliations.map(affiliation => new Affiliation(affiliation));
    } catch (err) {
        return err;
    }
};

export const selectAffiliationById = async (id: string|number): Promise<Affiliation> => {
    try {
        const affiliation = await promisifyDbGet(SQL_AFFILIATIONS.SELECT_BY_ID, { $id: id });
        return affiliation ? new Affiliation(affiliation) : null;
    } catch (err) {
        return err;
    }
};

export const insertAffiliationFull = async ({
    name,
}) => {
    try {
        const newAffiliationId = await promisifyDbRun(SQL_AFFILIATIONS.INSERT_FULL, {
            $name: name,
        });
        if (!newAffiliationId) {
            throw new Error("Database error! Failed to insert new affiliation");
        }
        const affiliation = await promisifyDbGet(SQL_AFFILIATIONS.SELECT_BY_ID, { $id: newAffiliationId });
        return affiliation ? new Affiliation(affiliation) : null;
    } catch (err) {
        return err;
    }
};

export const updateAffiliationFull = async ({
    id,
    name,
}) => {
    try {
        const newAffiliationId = await promisifyDbRun(SQL_AFFILIATIONS.UPDATE_FULL, {
            $id: id,
            $name: name,
        });
        if (!newAffiliationId) {
            throw new Error("Database error! Failed to update affiliation");
        }
        const affiliation = await promisifyDbGet(SQL_AFFILIATIONS.SELECT_BY_ID, { $id: newAffiliationId });
        return affiliation ? new Affiliation(affiliation) : null;
    } catch (err) {
        return err;
    }
};
