import { app, currentPlayers } from '../../app';
import { selectAllPlayers } from '../../database-operations/players';


export const getOnlinePlayers = () => {
    app.get('/players-online', (req, res) => {
        if (currentPlayers.error) {
            throw new Error(currentPlayers.error);
        } else {
            res.send(JSON.stringify(currentPlayers));
        }
    });
};

export const getPlayers = () => {
    app.get('/players', async (req, res, next) => {
        try {
            const players = await selectAllPlayers();
            res.send(JSON.stringify(players));
        } catch (err) {
            next(err);
        }
    });
};
