export const SQL_PLAYERS = {
    INSERT: `
        INSERT INTO Players (name, updatedAtDate)
        VALUES ($name, $updatedAtDate)
    `,
    SELECT: `
        SELECT * FROM Players WHERE name = $name
    `,
};
