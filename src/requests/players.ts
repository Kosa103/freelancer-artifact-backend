import { API_KEY } from '../app';
import { PlayersResponse } from '../models/playersResponse.model';
import { CONSOLE_LOGS } from '../helpers/console-logs';

const axios = require('axios');


export const getPlayers = async () => {
  return axios.get(`https://api.discoverygc.com/api/Online/GetPlayers/${API_KEY}`)
    .then(response => new PlayersResponse(response.data))
    .catch(err => CONSOLE_LOGS.GENERIC.logError(err, "getPlayers"));
};