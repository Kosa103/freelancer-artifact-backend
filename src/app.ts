import process from 'process';
import express from 'express';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
dotenv.config({path: __dirname + '/../.env'});
import * as sqlite from 'sqlite3';

import { getPlayers } from './requests/players';
import { CONSOLE_LOGS } from './helpers/console-logs';
import { PlayersResponse } from './models/playersResponse.model';
import { insertLocation } from './database-operations/locations';
import { setEndpoints } from './api/setEndpoints';


export const app = express();
export const sqlite3 = sqlite.verbose();
export const API_KEY = process.env['API_KEY'];
export const JWT_SECRET = process.env['JWT_SECRET'];
export const db = new sqlite3.Database('./db/FreelancerArtifact.db', err => CONSOLE_LOGS.DATABASE.open(err));

const port = 7300;
const rateLimiter = rateLimit({
  max: 100,
  windowMs: 60 * 1000,
  message: 'Too many requests sent by this IP, please try again in a minute!',
	standardHeaders: true,
	legacyHeaders: false,
});
export let currentPlayers: PlayersResponse = null;


const initApp = () => {
  app.use(express.json());
  app.use(rateLimiter);
}

const getPlayersCycle = () => {
  getPlayers()
  .then(data => {
    currentPlayers = data;
    insertLocation();
    return data;
  });
  
  setInterval(() => {
    getPlayers()
    .then(data => {
      currentPlayers = data;
      insertLocation();
      return data;
    });
  }, 60000);
}

const main = async () => {
  initApp();
  setEndpoints();
  getPlayersCycle();
}


/* -------------------------------------------------------------------------------- */
/*                                       MAIN                                       */
/* -------------------------------------------------------------------------------- */


main();

const server = app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  db.close();
  server.close();
});

process.on('SIGTERM', () => {
  db.close();
  server.close();
});

process.on('SIGQUIT', () => {
  db.close();
  server.close();
});
