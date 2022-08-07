import { currentPlayers } from '../app';
import { SQL_PLAYERS } from '../sql-commands/players';
import { SQL_REGIONS } from '../sql-commands/regions';
import { SQL_SYSTEMS } from '../sql-commands/systems';
import { SQL_LOCATIONS } from '../sql-commands/locations';
import { promisifyDbRun, promisifyDbGet, promisifyDbAll } from '../helpers/functions';
import { Location } from '../models/location.model';


export const selectLocationByPlayerId = async (query) => {
  try {
    const playerLocations = await promisifyDbAll(SQL_LOCATIONS.SELECT_BY_PLAYER_ID(query));
    return playerLocations.map(location => new Location(location));
  } catch (err) {
    return err;
  }
};

export const insertLocation = async () => {
  try {
    for (const player of currentPlayers.players) {
      const existingPlayer = await promisifyDbGet(SQL_PLAYERS.SELECT_BY_NAME, { $name: player.name });
      let newPlayerId;
      if (!existingPlayer) {
        newPlayerId = await promisifyDbRun(SQL_PLAYERS.INSERT, {
          $name: player.name,
          $updatedAtDate: currentPlayers.timestamp.split("T")[0]
        });
      }

      const existingRegion = await promisifyDbGet(SQL_REGIONS.SELECT_BY_NAME, { $name: player.region });
      let newRegionId;
      if (!existingRegion) {
        newRegionId = await promisifyDbRun(SQL_REGIONS.INSERT, { $name: player.region });
      }

      const existingSystem = await promisifyDbGet(SQL_SYSTEMS.SELECT_BY_NAME, { $name: player.system });
      let newSystemId;

      if (!existingSystem) {
        newSystemId = await promisifyDbRun(SQL_SYSTEMS.INSERT, {
          $name: player.system,
          $regionId: existingRegion?.id || newRegionId
        });
      }

      await promisifyDbRun(SQL_LOCATIONS.INSERT, {
        $playerId: existingPlayer?.id || newPlayerId,
        $date: currentPlayers.timestamp.split("T")[0],
        $time: currentPlayers.timestamp.split("T")[1],
        $systemId: existingSystem?.id || newSystemId,
      })
    }
    return null;
  } catch (err) {
    return err;
  }
};
