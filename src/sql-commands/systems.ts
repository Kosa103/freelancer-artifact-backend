export const SQL_SYSTEMS = {
    INSERT: `
        INSERT INTO Systems (name, regionId)
        VALUES ($name, $regionId)
    `,
    SELECT: `
        SELECT * FROM Systems WHERE name = $name
    `,
};
