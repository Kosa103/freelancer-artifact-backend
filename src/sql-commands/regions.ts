export const SQL_REGIONS = {
    INSERT: `
        INSERT INTO Regions (name)
        VALUES ($name)
    `,
    SELECT: `
        SELECT * FROM Regions WHERE name = $name
    `,
};
