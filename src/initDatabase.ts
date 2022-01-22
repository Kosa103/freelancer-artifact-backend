import * as sqlite from 'sqlite3';
import { CONSOLE_LOGS } from './helpers';
import { SQL_CREATE_TABLE } from './constants';

const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database(
    './db/FreelancerArtifact.db',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    err => {
        err
        ? console.error("Error creating or opening database: ", err)
        : console.error("Successfully created/opened FreelancerArtifact database");
});

const createTables = () => {
    db.serialize(() => {
        db
        .run(SQL_CREATE_TABLE.USERS, err => CONSOLE_LOGS.createTable(err, "Users"))
        .run(SQL_CREATE_TABLE.SHIP_TYPES, err => CONSOLE_LOGS.createTable(err, "ShipTypes"))
        .run(SQL_CREATE_TABLE.SHIPS, err => CONSOLE_LOGS.createTable(err, "Ships"))
        .run(SQL_CREATE_TABLE.AFFILIATIONS, err => CONSOLE_LOGS.createTable(err, "Affiliations"))
        .run(SQL_CREATE_TABLE.IDENTIFIERS, err => CONSOLE_LOGS.createTable(err, "Identifiers"))
        .run(SQL_CREATE_TABLE.SCANNERS, err => CONSOLE_LOGS.createTable(err, "Scanners"))
        .run(SQL_CREATE_TABLE.ARMORS, err => CONSOLE_LOGS.createTable(err, "Armors"))
        .run(SQL_CREATE_TABLE.CLOAKS, err => CONSOLE_LOGS.createTable(err, "Cloaks"))
        .run(SQL_CREATE_TABLE.COMMODITIES, err => CONSOLE_LOGS.createTable(err, "Commodities"))
        .run(SQL_CREATE_TABLE.PLAYERS, err => CONSOLE_LOGS.createTable(err, "Players"))
        .run(SQL_CREATE_TABLE.REGIONS, err => CONSOLE_LOGS.createTable(err, "Regions"))
        .run(SQL_CREATE_TABLE.SYSTEMS, err => CONSOLE_LOGS.createTable(err, "Systems"))
        .run(SQL_CREATE_TABLE.LOCATIONS, err => CONSOLE_LOGS.createTable(err, "Locations"))
        .run(SQL_CREATE_TABLE.CARRIED_COMMODITIES, err => CONSOLE_LOGS.createTable(err, "CarriedCommodities"))    
    });
};

const main = () => {
    createTables();
    
    db.close(err => {
        err
        ? console.error("Error closing database: ", err)
        : console.log("Successfully closed database");
    });
}

main();
