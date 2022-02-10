export const SQL_AFFILIATIONS = {
    SELECT_ALL: `
        SELECT * FROM Affiliations ORDER BY name ASC
    `,
    SELECT_BY_ID: `
        SELECT * FROM Affiliations WHERE id = $id
    `,
    INSERT_FULL: `
        INSERT INTO Affiliations (name)
        VALUES ($name)
    `,
    UPDATE_FULL: `
        UPDATE Affiliations
        SET (
            name = $name
        )
        WHERE id = $id
    `,
};
