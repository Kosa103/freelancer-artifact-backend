export const SQL_SYSTEMS = {
  SELECT_ALL: `
        SELECT * FROM Systems ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Systems WHERE id = $id
    `,
  SELECT_BY_NAME: `
        SELECT * FROM Systems WHERE name = $name
    `,
  INSERT: `
        INSERT INTO Systems (name, regionId)
        VALUES ($name, $regionId)
    `,
  INSERT_FULL: `
        INSERT INTO Systems (name, regionId)
        VALUES ($name, $regionId)
    `,
};
