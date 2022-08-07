export const SQL_CLOAKS = {
  SELECT_ALL: `
        SELECT * FROM Cloaks ORDER BY name ASC
    `,
  SELECT_BY_ID: `
        SELECT * FROM Cloaks WHERE id = $id
    `,
  INSERT_FULL: `
        INSERT INTO Cloaks (name, duration, chargeTime, requiredCargo)
        VALUES ($name, $duration, $chargeTime, $requiredCargo)
    `,
  UPDATE_FULL: `
        UPDATE Cloaks
        SET (
            name = $name,
            duration = $duration,
            chargeTime = $chargeTime,
            requiredCargo = $requiredCargo
        )
        WHERE id = $id
    `,
};
