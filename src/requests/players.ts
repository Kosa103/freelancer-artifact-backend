import { API_KEY } from '../app';
import { PlayersResponse } from '../models/playersResponse.model';

const axios = require('axios');

export const getPlayers = async () => {
    return axios.get(`https://api.discoverygc.com/api/Online/GetPlayers/${API_KEY}`)
        .then(response => {
            console.log("response.data:");
            console.log(response.data);
            return new PlayersResponse(response.data);
        })
        .catch(error => {
            console.log("An error occurred:");
            console.error(error);
        });
};