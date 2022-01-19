import * as sqlite from 'sqlite3';

export const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database(
    './db/FreelancerArtifact.db',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
    err => {
    if (err) {
        console.log("Error creating or opening database:");
        console.error(err);
    }
    err
    ? console.error("Error creating or opening database: ", err)
    : console.error("Successfully created/opened FreelancerArtifact database");
});

const createTables = () => {
    createPlayersTable();
    createRegionsTable();
    createSystemsTable();
    createLocationsTable();
};

const createPlayersTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Players (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Description TEXT
        )
    `;
    return db.run(sql, err => {
        err
        ? console.error("Error creating Players table: ", err)
        : console.error("Successfully created Players table");
    });
};

const createRegionsTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Regions (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL
        )
    `;
    return db.run(sql, err => {
        err
        ? console.error("Error creating Regions table: ", err)
        : console.error("Successfully created Regions table");
    });
};

const createSystemsTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Systems (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            RegionId INTEGER NOT NULL,
            FOREIGN KEY (RegionId) REFERENCES Regions (Id)
        )
    `;
    return db.run(sql, err => {
        err
        ? console.error("Error creating Systems table: ", err)
        : console.error("Successfully created Systems table");
    });
};

const createLocationsTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Locations (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            SystemId INTEGER NOT NULL,
            Date TEXT NOT NULL,
            Time TEXT NOT NULL,
            PlayerId INTEGER NOT NULL,
            FOREIGN KEY (PlayerId) REFERENCES Players (Id),
            FOREIGN KEY (SystemId) REFERENCES Systems (Id)
        )
    `;
    return db.run(sql, err => {
        err
        ? console.error("Error creating Locations table: ", err)
        : console.error("Successfully created Locations table");
    });
};

createTables();
db.close();
