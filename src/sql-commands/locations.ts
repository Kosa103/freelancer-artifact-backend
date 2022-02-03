export const SQL_LOCATIONS = {
    INSERT: `
        INSERT INTO Locations (playerId, systemId, date, time)
        VALUES ($playerId, $systemId, $date, $time)
    `,
};
