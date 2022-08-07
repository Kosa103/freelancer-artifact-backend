import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { Armor } from "../models/armor.model";
import { SQL_ARMORS } from "../sql-commands/armors"


export const selectAllArmors = async (): Promise<Armor[]> => {
  try {
    const armors = await promisifyDbAll(SQL_ARMORS.SELECT_ALL);
    return armors.map(armor => new Armor(armor));
  } catch (err) {
    return err;
  }
};

export const selectArmorById = async (id: string | number): Promise<Armor> => {
  try {
    const armor = await promisifyDbGet(SQL_ARMORS.SELECT_BY_ID, { $id: id });
    return armor ? new Armor(armor) : null;
  } catch (err) {
    return err;
  }
};

export const insertArmorFull = async ({
  name,
  multiplier,
  requiredCargo,
  price,
}) => {
  try {
    const newArmorId = await promisifyDbRun(SQL_ARMORS.INSERT_FULL, {
      $name: name,
      $multiplier: multiplier,
      $requiredCargo: requiredCargo,
      $price: price,
    });
    if (!newArmorId) {
      throw new Error("Database error! Failed to insert new armor");
    }
    const armor = await promisifyDbGet(SQL_ARMORS.SELECT_BY_ID, { $id: newArmorId });
    return armor ? new Armor(armor) : null;
  } catch (err) {
    return err;
  }
};

export const updateArmorFull = async ({
  id,
  name,
  multiplier,
  requiredCargo,
  price,
}) => {
  try {
    const newArmorId = await promisifyDbRun(SQL_ARMORS.UPDATE_FULL, {
      $id: id,
      $name: name,
      $multiplier: multiplier,
      $requiredCargo: requiredCargo,
      $price: price,
    });
    if (!newArmorId) {
      throw new Error("Database error! Failed to update armor");
    }
    const armor = await promisifyDbGet(SQL_ARMORS.SELECT_BY_ID, { $id: newArmorId });
    return armor ? new Armor(armor) : null;
  } catch (err) {
    return err;
  }
};
