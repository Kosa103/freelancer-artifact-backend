export const SQL_SHIPTYPES = {
  SELECT_ALL: `
        SELECT * FROM ShipTypes ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM ShipTypes WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO ShipTypes (name, typicalSpeed)
        VALUES ($name, $typicalSpeed)
    `,
  UPDATE_FULL: `
        UPDATE ShipTypes
        SET (
            name = $name,
            typicalSpeed = $typicalSpeed
        )
        WHERE id = $id
    `,
};
