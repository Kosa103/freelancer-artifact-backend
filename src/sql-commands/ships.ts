export const SQL_SHIPS = {
  SELECT_ALL: `
        SELECT * FROM Ships ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Ships WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Players (name, fullName, shipTypeId, cargoSpace)
        VALUES ($name, $fullName, $shipTypeId, $cargoSpace)
    `,
  UPDATE_FULL: `
        UPDATE Players
        SET (
            name = $name,
            fullName = $fullName,
            shipTypeId = $shipTypeId,
            cargoSpace = $cargoSpace
        )
        WHERE id = $id
    `,
};
