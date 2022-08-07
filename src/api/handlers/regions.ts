import { app } from '../../app';
import { selectAllRegions } from '../../database-operations/regions';
import { authenticate as auth } from '../../middleware/auth';
import { ADMIN_API_PATH } from '../../constants';
import { Region } from '../../models/region.model';

export const getRegions = () => {
  app.get(
    `${ADMIN_API_PATH}/regions`,
    auth,
    async (req, res, next) => {
      const filter = req.query?.filter || null;

      try {
        const regions: Region[] = await selectAllRegions();
        res.send(JSON.stringify(regions));
      } catch (err) {
        next(err);
      }
    });
};