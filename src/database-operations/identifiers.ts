import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Identifier } from "../models/identifier.model";
import { SQL_IDENTIFIERS } from "../sql-commands/identifiers"


export const selectAllIdentifiers = async (): Promise<Identifier[]> => {
  try {
    const identifiers = await promisifyDbAll(SQL_IDENTIFIERS.SELECT_ALL);
    return identifiers.map(identifier => new Identifier(identifier));
  } catch (err) {
    return err;
  }
};

export const selectIdentifierById = async (id: string | number): Promise<Identifier> => {
  try {
    const identifier = await promisifyDbGet(SQL_IDENTIFIERS.SELECT_BY_ID, { $id: id });
    return identifier ? new Identifier(identifier) : null;
  } catch (err) {
    return err;
  }
};

export const insertIdentifierFull = async ({
  name,
}) => {
  try {
    const newIdentifierId = await promisifyDbRun(SQL_IDENTIFIERS.INSERT_FULL, {
      $name: name,
    });
    if (!newIdentifierId) {
      throw new Error("Database error! Failed to insert new identifier");
    }
    const identifier = await promisifyDbGet(SQL_IDENTIFIERS.SELECT_BY_ID, { $id: newIdentifierId });
    return identifier ? new Identifier(identifier) : null;
  } catch (err) {
    return err;
  }
};

export const updateIdentifierFull = async ({
  id,
  name,
}) => {
  try {
    const newIdentifierId = await promisifyDbRun(SQL_IDENTIFIERS.UPDATE_FULL, {
      $id: id,
      $name: name,
    });
    if (!newIdentifierId) {
      throw new Error("Database error! Failed to update identifier");
    }
    const identifier = await promisifyDbGet(SQL_IDENTIFIERS.SELECT_BY_ID, { $id: newIdentifierId });
    return identifier ? new Identifier(identifier) : null;
  } catch (err) {
    return err;
  }
};
