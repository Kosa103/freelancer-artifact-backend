import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: __dirname + '/../.env'});

const app = express();
const port = 3000;
const axios = require('axios');

export const API_KEY = process.env['API_KEY'];

const getPlayers = async () => {
  return axios.get(`https://api.discoverygc.com/api/Online/GetPlayers/${API_KEY}`)
    .then(response => {
      console.log("response.data:");
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

getPlayers();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
