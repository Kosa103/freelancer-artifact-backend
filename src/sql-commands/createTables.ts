export const SQL_CREATE_TABLE = {
    USERS: `
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            hash TEXT NOT NULL,
            isAdmin BOOLEAN NOT NULL
        )
    `,
    SHIP_TYPES: `
        CREATE TABLE IF NOT EXISTS ShipTypes (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            typicalSpeed INTEGER NOT NULL
        )
    `,
    SHIPS: `
        CREATE TABLE IF NOT EXISTS Ships (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            fullName TEXT NOT NULL,
            shipTypeId INTEGER NOT NULL,
            cargoSpace INTEGER NOT NULL,
            FOREIGN KEY (shipTypeId) REFERENCES ShipTypes (id)
        )
    `,
    AFFILIATIONS: `
        CREATE TABLE IF NOT EXISTS Affiliations (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
    `,
    IDENTIFIERS: `
        CREATE TABLE IF NOT EXISTS Identifiers (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
    `,
    SCANNERS: `
        CREATE TABLE IF NOT EXISTS Scanners (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            scanRange INTEGER NOT NULL,
            cargoScanRange INTEGER NOT NULL,
            price INTEGER NOT NULL
        )
    `,
    ARMORS: `
        CREATE TABLE IF NOT EXISTS Armors (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            multiplier REAL NOT NULL,
            requiredCargo INTEGER NOT NULL,
            price INTEGER NOT NULL
        )
    `,
    CLOAKS: `
        CREATE TABLE IF NOT EXISTS Cloaks (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            duration INTEGER NOT NULL,
            chargeTime INTEGER NOT NULL,
            requiredCargo INTEGER NOT NULL
        )
    `,
    COMMODITIES: `
        CREATE TABLE IF NOT EXISTS Commodities (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            isOre BOOLEAN NOT NULL,
            isContraband BOOLEAN NOT NULL,
            requiredCargo INTEGER NOT NULL
        )
    `,
    PLAYERS: `
        CREATE TABLE IF NOT EXISTS Players (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            level INTEGER,
            description TEXT,
            updatedAtDate TEXT NOT NULL,
            shipId INTEGER,
            affiliationId INTEGER,
            identifierId INTEGER,
            scannerId INTEGER,
            armorId INTEGER,
            cloakId INTEGER,
            FOREIGN KEY (shipId) REFERENCES Ships (id),
            FOREIGN KEY (affiliationId) REFERENCES Affiliations (id),
            FOREIGN KEY (identifierId) REFERENCES Identifiers (id),
            FOREIGN KEY (scannerId) REFERENCES Scanners (id),
            FOREIGN KEY (armorId) REFERENCES Armors (id),
            FOREIGN KEY (cloakId) REFERENCES Cloaks (id)
        )
    `,
    REGIONS: `
        CREATE TABLE IF NOT EXISTS Regions (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
    `,
    SYSTEMS: `
        CREATE TABLE IF NOT EXISTS Systems (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            regionId INTEGER NOT NULL,
            FOREIGN KEY (RegionId) REFERENCES Regions (Id)
        )
    `,
    LOCATIONS: `
        CREATE TABLE IF NOT EXISTS Locations (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            systemId INTEGER NOT NULL,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            playerId INTEGER NOT NULL,
            FOREIGN KEY (playerId) REFERENCES Players (id),
            FOREIGN KEY (systemId) REFERENCES Systems (id)
        )
    `,
    CARRIED_COMMODITIES: `
        CREATE TABLE IF NOT EXISTS CarriedCommodities (
            playerId INTEGER NOT NULL,
            commodityId INTEGER NOT NULL,
            FOREIGN KEY (playerId) REFERENCES Players (id),
            FOREIGN KEY (commodityId) REFERENCES Commodities (id)
        )
    `,
};
