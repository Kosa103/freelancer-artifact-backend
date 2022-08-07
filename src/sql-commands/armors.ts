export const SQL_ARMORS = {
  SELECT_ALL: `
        SELECT * FROM Armors ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Armors WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Armors (name, multiplier, requiredCargo, price)
        VALUES ($name, $multiplier, $requiredCargo, $price)
    `,
  UPDATE_FULL: `
        UPDATE Armors
        SET (
            name = $name,
            multiplier = $multiplier,
            requiredCargo = $requiredCargo,
            price = $price
        )
        WHERE id = $id
    `,
};
