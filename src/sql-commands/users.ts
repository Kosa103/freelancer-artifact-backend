export const SQL_USERS = {
    SELECT_ALL: `
        SELECT * FROM Users ORDER BY name ASC
    `,
    SELECT_BY_ID: `
        SELECT * FROM Users WHERE id = $id
    `,
    SELECT_BY_NAME: `
        SELECT * FROM Users WHERE name = $name
    `,
    SELECT_BY_HASH: `
        SELECT * FROM Users WHERE hash = $hash
    `,
    INSERT: `
        INSERT INTO Users (name, hash, isAdmin, token)
        VALUES ($name, $hash, $isAdmin, $token)
    `,
    INSERT_FULL: `
        INSERT INTO Users (name, hash, isAdmin, token)
        VALUES ($name, $hash, $isAdmin, $token)
    `,
    UPDATE_FULL: `
        UPDATE Users
        SET (
            name = $name,
            hash = $hash,
            isAdmin = $isAdmin,
            token = $token
        )
        WHERE id = $id
    `,
};
