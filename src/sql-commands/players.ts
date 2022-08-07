export const SQL_PLAYERS = {
  SELECT_ALL: `
      SELECT * FROM Players ORDER BY name ASC
    `,
  SELECT_ALL_FILTER: search => {
    return `
      SELECT * FROM Players
      WHERE name LIKE '%${search}%'
      ORDER BY name ASC
    `;
  },
  SELECT_BY_ID: `
      SELECT * FROM Players WHERE id = $id
    `,
  SELECT_BY_NAME: `
      SELECT * FROM Players WHERE name = $name
    `,
  INSERT: `
      INSERT INTO Players (name, updatedAtDate)
      VALUES ($name, $updatedAtDate)
    `,
  INSERT_FULL: `
      INSERT INTO Players (name, level, description, updatedAtDate, shipId, affiliationId, identifierId, scannerId, armorId, cloakId)
      VALUES ($name, $level, $description, $updatedAtDate, $shipId, $affiliationId, $identifierId, $scannerId, $armorId, $cloakId)
    `,
  UPDATE_FULL: `
      UPDATE Players
      SET (
        name = $name,
        level = $level,
        description = $description,
        updatedAtDate = $updatedAtDate,
        shipId = $shipId,
        affiliationId = $affiliationId,
        identifierId = $identifierId,
        scannerId = $scannerId,
        armorId = $armorId,
        cloakId = $cloakId
      )
      WHERE id = $id
    `,
};
