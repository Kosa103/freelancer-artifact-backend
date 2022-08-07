export const SQL_REGIONS = {
  SELECT_ALL: `
        SELECT * FROM Regions ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Regions WHERE id = $id
    `,
  SELECT_BY_NAME: `
        SELECT * FROM Regions WHERE name = $name
    `,
  INSERT: `
        INSERT INTO Regions (name)
        VALUES ($name)
    `,
  INSERT_FULL: `
        INSERT INTO Regions (name)
        VALUES ($name)
    `,
};
