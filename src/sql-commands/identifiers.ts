export const SQL_IDENTIFIERS = {
  SELECT_ALL: `
        SELECT * FROM Identifiers ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Identifiers WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Identifiers (name)
        VALUES ($name)
    `,
  UPDATE_FULL: `
        UPDATE Identifiers
        SET (
            name = $name
        )
        WHERE id = $id
    `,
};
