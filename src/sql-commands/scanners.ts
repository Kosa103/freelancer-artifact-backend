export const SQL_SCANNERS = {
  SELECT_ALL: `
        SELECT * FROM Scanners ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Scanners WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Scanners (name, scanRange, cargoScanRange, price)
        VALUES ($name, $scanRange, $cargoScanRange, $price)
    `,
  UPDATE_FULL: `
        UPDATE Scanners
        SET (
            name = $name,
            scanRange = $scanRange,
            cargoScanRange = $cargoScanRange,
            price = $price
        )
        WHERE id = $id
    `,
};
