import { CONSOLE_LOGS } from '../helpers/console-logs';
import { SQL_CREATE_TABLE } from '../sql-commands/createTables';
import { db } from '../initDatabase';


export const createTables = () => {
  db.serialize(() => {
    db
      .run(SQL_CREATE_TABLE.USERS, err => CONSOLE_LOGS.TABLES.create(err, "Users"))
      .run(SQL_CREATE_TABLE.SHIP_TYPES, err => CONSOLE_LOGS.TABLES.create(err, "ShipTypes"))
      .run(SQL_CREATE_TABLE.SHIPS, err => CONSOLE_LOGS.TABLES.create(err, "Ships"))
      .run(SQL_CREATE_TABLE.AFFILIATIONS, err => CONSOLE_LOGS.TABLES.create(err, "Affiliations"))
      .run(SQL_CREATE_TABLE.IDENTIFIERS, err => CONSOLE_LOGS.TABLES.create(err, "Identifiers"))
      .run(SQL_CREATE_TABLE.SCANNERS, err => CONSOLE_LOGS.TABLES.create(err, "Scanners"))
      .run(SQL_CREATE_TABLE.ARMORS, err => CONSOLE_LOGS.TABLES.create(err, "Armors"))
      .run(SQL_CREATE_TABLE.CLOAKS, err => CONSOLE_LOGS.TABLES.create(err, "Cloaks"))
      .run(SQL_CREATE_TABLE.COMMODITIES, err => CONSOLE_LOGS.TABLES.create(err, "Commodities"))
      .run(SQL_CREATE_TABLE.PLAYERS, err => CONSOLE_LOGS.TABLES.create(err, "Players"))
      .run(SQL_CREATE_TABLE.REGIONS, err => CONSOLE_LOGS.TABLES.create(err, "Regions"))
      .run(SQL_CREATE_TABLE.SYSTEMS, err => CONSOLE_LOGS.TABLES.create(err, "Systems"))
      .run(SQL_CREATE_TABLE.LOCATIONS, err => CONSOLE_LOGS.TABLES.create(err, "Locations"))
      .run(SQL_CREATE_TABLE.CARRIED_COMMODITIES, err => CONSOLE_LOGS.TABLES.create(err, "CarriedCommodities"))
  });
};
