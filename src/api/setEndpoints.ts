import { getPlayerLocations } from "./handlers/locations";
import {
  postPlayer,
  getOnlinePlayers,
  getPlayer,
  getPlayers,
  putPlayer
} from "./handlers/players"
import { getRegions } from "./handlers/regions";
import { getSystems } from "./handlers/systems";
import { createUser, loginUser } from "./handlers/users";


export const setEndpoints = (): void => {
  getOnlinePlayers();
  getPlayers();
  getPlayer();
  postPlayer();
  putPlayer();

  getSystems();

  getRegions();

  getPlayerLocations();

  createUser();
  loginUser();
}