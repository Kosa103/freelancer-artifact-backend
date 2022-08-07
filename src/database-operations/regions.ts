import { promisifyDbAll } from "../helpers/functions"
import { Region } from "../models/region.model";
import { SQL_REGIONS } from "../sql-commands/regions"


export const selectAllRegions = async (): Promise<Region[]> => {
  try {
    const regions = await promisifyDbAll(SQL_REGIONS.SELECT_ALL);
    return regions.map(region => new Region(region));
  } catch (err) {
    return err;
  }
};