import { app } from '../../app';
import { selectLocationByPlayerId } from '../../database-operations/locations';
import { authenticate as auth } from '../../middleware/auth';
import { ADMIN_API_PATH } from '../../constants';
import { Location } from '../../models/location.model';

export const getPlayerLocations = () => {
  app.get(
    `${ADMIN_API_PATH}/players/:playerId/locations`,
    auth,
    async (req, res, next) => {
      const query = {
        playerId: req.params.playerId,
        ...req.query
      };   

      try {
        const locations: Location[] = await selectLocationByPlayerId(query);
        res.send(JSON.stringify(locations));
      } catch (err) {
        next(err);
      }
    });
};