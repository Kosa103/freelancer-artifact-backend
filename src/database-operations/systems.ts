import { promisifyDbAll } from "../helpers/functions"
import { System } from "../models/system.model";
import { SQL_SYSTEMS } from "../sql-commands/systems"


export const selectAllSystems = async (): Promise<System[]> => {
  try {
    const systems = await promisifyDbAll(SQL_SYSTEMS.SELECT_ALL);
    return systems.map(system => new System(system));
  } catch (err) {
    return err;
  }
};