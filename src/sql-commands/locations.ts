export const SQL_LOCATIONS = {
  SELECT_BY_PLAYER_ID: query => {
    const limit = query.limit ? `LIMIT ${query.limit}` : '';

    return `
      SELECT * FROM Locations
      WHERE playerId = ${query.playerId}
      ORDER BY date, time DESC
      ${limit}
    `;
  },
  INSERT: `
      INSERT INTO Locations (playerId, systemId, date, time)
      VALUES ($playerId, $systemId, $date, $time)
    `,
};
