import { app } from '../../app';
import { countLocations, selectLocationByPlayerId } from '../../database-operations/locations';
import { authenticate as auth } from '../../middleware/auth';
import { ADMIN_API_PATH } from '../../constants';
import { Location } from '../../models/location.model';
import { PaginatedResponse } from '../../models/paginated-response.model';

export const getPlayerLocations = () => {
  app.get(
    `${ADMIN_API_PATH}/players/:playerId/locations`,
    auth,
    async (req, res, next) => {
      const playerId = req.params.playerId;
      let start: number = Number(req.query?.start);
      let limit: number = Number(req.query?.limit);

      if (!limit || limit % 1 !== 0 || limit <= 0) {
        limit = null;
      }

      if (!limit || !start || start % 1 !== 0 || start <= 0) {
        start = null;
      }  

      try {
        const locations: Location[] = await selectLocationByPlayerId({ playerId, limit, start });
        const count: number = await countLocations({ playerId });
        const response = new PaginatedResponse({ data: locations, count });
        res.send(JSON.stringify(response));
      } catch (err) {
        next(err);
      }
    });
};