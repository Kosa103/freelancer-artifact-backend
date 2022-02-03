import { app, currentPlayers } from '../app';


export const handleGetHome = () => {
    app.get('/', (req, res) => {
        res.send(JSON.stringify(currentPlayers));
    });
}