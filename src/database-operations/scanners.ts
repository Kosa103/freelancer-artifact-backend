import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Scanner } from "../models/scanner.model";
import { SQL_SCANNERS } from "../sql-commands/scanners"


export const selectAllScanners = async (): Promise<Scanner[]> => {
  try {
    const scanners = await promisifyDbAll(SQL_SCANNERS.SELECT_ALL);
    return scanners.map(scanner => new Scanner(scanner));
  } catch (err) {
    return err;
  }
};

export const selectScannerById = async (id: string | number): Promise<Scanner> => {
  try {
    const scanner = await promisifyDbGet(SQL_SCANNERS.SELECT_BY_ID, { $id: id });
    return scanner ? new Scanner(scanner) : null;
  } catch (err) {
    return err;
  }
};

export const insertScannerFull = async ({
  name,
  scanRange,
  cargoScanRange,
  price,
}) => {
  try {
    const newScannerId = await promisifyDbRun(SQL_SCANNERS.INSERT_FULL, {
      $name: name,
      $scanRange: scanRange,
      $cargoScanRange: cargoScanRange,
      $price: price,
    });
    if (!newScannerId) {
      throw new Error("Database error! Failed to insert new scanner");
    }
    const scanner = await promisifyDbGet(SQL_SCANNERS.SELECT_BY_ID, { $id: newScannerId });
    return scanner ? new Scanner(scanner) : null;
  } catch (err) {
    return err;
  }
};

export const updateScannerFull = async ({
  id,
  name,
  scanRange,
  cargoScanRange,
  price,
}) => {
  try {
    const newScannerId = await promisifyDbRun(SQL_SCANNERS.UPDATE_FULL, {
      $id: id,
      $name: name,
      $scanRange: scanRange,
      $cargoScanRange: cargoScanRange,
      $price: price,
    });
    if (!newScannerId) {
      throw new Error("Database error! Failed to update scanner");
    }
    const scanner = await promisifyDbGet(SQL_SCANNERS.SELECT_BY_ID, { $id: newScannerId });
    return scanner ? new Scanner(scanner) : null;
  } catch (err) {
    return err;
  }
};
