export const SQL_CREATE_TABLE = {
    USERS: `
        CREATE TABLE IF NOT EXISTS Users (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Hash TEXT NOT NULL,
            IsAdmin BOOLEAN NOT NULL
        )
    `,
    SHIP_TYPES: `
        CREATE TABLE IF NOT EXISTS ShipTypes (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            TypicalSpeed INTEGER NOT NULL
        )
    `,
    SHIPS: `
        CREATE TABLE IF NOT EXISTS Ships (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            FullName TEXT NOT NULL,
            ShipTypeId INTEGER NOT NULL,
            CargoSpace INTEGER NOT NULL,
            FOREIGN KEY (ShipTypeId) REFERENCES ShipTypes (Id)
        )
    `,
    AFFILIATIONS: `
        CREATE TABLE IF NOT EXISTS Affiliations (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL
        )
    `,
    IDENTIFIERS: `
        CREATE TABLE IF NOT EXISTS Identifiers (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL
        )
    `,
    SCANNERS: `
        CREATE TABLE IF NOT EXISTS Scanners (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            ScanRange INTEGER NOT NULL,
            CargoScanRange INTEGER NOT NULL,
            Price INTEGER NOT NULL
        )
    `,
    ARMORS: `
        CREATE TABLE IF NOT EXISTS Armors (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Multiplier REAL NOT NULL,
            RequiredCargo INTEGER NOT NULL,
            Price INTEGER NOT NULL
        )
    `,
    CLOAKS: `
        CREATE TABLE IF NOT EXISTS Cloaks (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Duration INTEGER NOT NULL,
            ChargeTime INTEGER NOT NULL,
            RequiredCargo INTEGER NOT NULL
        )
    `,
    COMMODITIES: `
        CREATE TABLE IF NOT EXISTS Commodities (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            IsOre BOOLEAN NOT NULL,
            IsContraband BOOLEAN NOT NULL,
            RequiredCargo INTEGER NOT NULL
        )
    `,
    PLAYERS: `
        CREATE TABLE IF NOT EXISTS Players (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Level INTEGER,
            Description TEXT,
            UpdatedAtDate TEXT NOT NULL,
            ShipId INTEGER,
            AffiliationId INTEGER,
            IdentifierId INTEGER,
            ScannerId INTEGER,
            ArmorId INTEGER,
            CloakId INTEGER,
            FOREIGN KEY (ShipId) REFERENCES Ships (Id),
            FOREIGN KEY (AffiliationId) REFERENCES Affiliations (Id),
            FOREIGN KEY (IdentifierId) REFERENCES Identifiers (Id),
            FOREIGN KEY (ScannerId) REFERENCES Scanners (Id),
            FOREIGN KEY (ArmorId) REFERENCES Armors (Id),
            FOREIGN KEY (CloakId) REFERENCES Cloaks (Id)
        )
    `,
    REGIONS: `
        CREATE TABLE IF NOT EXISTS Regions (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL
        )
    `,
    SYSTEMS: `
        CREATE TABLE IF NOT EXISTS Systems (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            RegionId INTEGER NOT NULL,
            FOREIGN KEY (RegionId) REFERENCES Regions (Id)
        )
    `,
    LOCATIONS: `
        CREATE TABLE IF NOT EXISTS Locations (
            Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            SystemId INTEGER NOT NULL,
            Date TEXT NOT NULL,
            Time TEXT NOT NULL,
            PlayerId INTEGER NOT NULL,
            FOREIGN KEY (PlayerId) REFERENCES Players (Id),
            FOREIGN KEY (SystemId) REFERENCES Systems (Id)
        )
    `,
    CARRIED_COMMODITIES: `
        CREATE TABLE IF NOT EXISTS CarriedCommodities (
            PlayerId INTEGER NOT NULL,
            CommodityId INTEGER NOT NULL,
            FOREIGN KEY (PlayerId) REFERENCES Players (Id),
            FOREIGN KEY (CommodityId) REFERENCES Commodities (Id)
        )
    `,
};