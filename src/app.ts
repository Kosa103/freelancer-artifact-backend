import express from 'express';
import dotenv from 'dotenv';

import { getPlayers } from './requests/players';

const app = express();
const port = 7300;
const axios = require('axios');

dotenv.config({path: __dirname + '/../.env'});
export const API_KEY = process.env['API_KEY'];

let currentPlayers = null;

getPlayers()
.then(data => currentPlayers = data)
.finally(() => console.log("currentPlayers:", currentPlayers));

setInterval(() => {
  getPlayers()
  .then(data => currentPlayers = data)
  .finally(() => console.log("currentPlayers:", currentPlayers));
}, 60000);

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
