export const SQL_LOCATIONS = {
  SELECT_BY_PLAYER_ID: ({ playerId, limit, start }) => {
    return `
      SELECT * FROM Locations
      WHERE playerId = ${playerId}
      ORDER BY date DESC, time DESC
      ${limit ? `LIMIT ${limit}` : ''}
      ${start ? `OFFSET ${start}` : ''}
    `;
  },
  COUNT_BY_PLAYER_ID: ({ playerId }) => {
    return `
      SELECT COUNT(id)
      FROM Locations
      WHERE playerId = ${playerId}
    `;
  },
  INSERT: `
      INSERT INTO Locations (playerId, systemId, date, time)
      VALUES ($playerId, $systemId, $date, $time)
    `,
};
