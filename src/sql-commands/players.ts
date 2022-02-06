export const SQL_PLAYERS = {
    INSERT: `
        INSERT INTO Players (name, updatedAtDate)
        VALUES ($name, $updatedAtDate)
    `,
    SELECT_ALL: `
        SELECT * FROM Players
    `,
    SELECT: `
        SELECT * FROM Players WHERE name = $name
    `,
};
