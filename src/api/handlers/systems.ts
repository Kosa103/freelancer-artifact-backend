import { app } from '../../app';
import { selectAllSystems } from '../../database-operations/systems';
import { authenticate as auth } from '../../middleware/auth';
import { ADMIN_API_PATH } from '../../constants';
import { System } from '../../models/system.model';

export const getSystems = () => {
  app.get(
    `${ADMIN_API_PATH}/systems`,
    auth,
    async (req, res, next) => {
      const filter = req.query?.filter || null;

      try {
        const systems: System[] = await selectAllSystems();
        res.send(JSON.stringify(systems));
      } catch (err) {
        next(err);
      }
    });
};