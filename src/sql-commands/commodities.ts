export const SQL_COMMODITIES = {
  SELECT_ALL: `
        SELECT * FROM Commodities ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Commodities WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Commodities (name, requiredCargo, isOre, isContraband)
        VALUES ($name, $requiredCargo, $isOre, $isContraband)
    `,
  UPDATE_FULL: `
        UPDATE Commodities
        SET (
            name = $name,
            requiredCargo = $requiredCargo,
            isOre = $isOre,
            isContraband = $isContraband
        )
        WHERE id = $id
    `,
};
