import { promisifyDbAll, promisifyDbGet, promisifyDbRun } from "../helpers/functions"
import { User } from "../models/user.model";
import { SQL_USERS } from "../sql-commands/users";


export const selectAllUsers = async (): Promise<User[]> => {
  try {
    const users = await promisifyDbAll(SQL_USERS.SELECT_ALL);
    return users.map(user => new User(user));
  } catch (err) {
    return err;
  }
};

export const selectUserById = async (id: string): Promise<User> => {
  try {
    const user = await promisifyDbGet(SQL_USERS.SELECT_BY_ID, { $id: id });
    return user ? new User(user) : null;
  } catch (err) {
    return err;
  }
};

export const selectUserByEmail = async (email: string): Promise<User> => {
  try {
    const user = await promisifyDbGet(SQL_USERS.SELECT_BY_EMAIL, { $email: email });
    return user ? new User(user) : null;
  } catch (err) {
    return err;
  }
};

export const selectUserByHash = async (hash: string): Promise<User> => {
  try {
    const user = await promisifyDbGet(SQL_USERS.SELECT_BY_HASH, { $hash: hash });
    return user ? new User(user) : null;
  } catch (err) {
    return err;
  }
};

export const insertUserFull = async ({
  email,
  name,
  hash,
  isAdmin,
  token,
}) => {
  try {
    const newUserId = await promisifyDbRun(SQL_USERS.INSERT_FULL, {
      $email: email,
      $name: name,
      $hash: hash,
      $isAdmin: isAdmin,
      $token: token,
    });
    if (!newUserId) {
      throw new Error("Database error! Failed to insert new user");
    }
    const user = await promisifyDbGet(SQL_USERS.SELECT_BY_ID, { $id: newUserId });
    return user ? new User(user) : null;
  } catch (err) {
    return err;
  }
};

export const updateUserFull = async ({
  id,
  email,
  name,
  hash,
  isAdmin,
  token,
}) => {
  try {
    const newUserId = await promisifyDbRun(SQL_USERS.UPDATE_FULL, {
      $id: id,
      $email: email,
      $name: name,
      $hash: hash,
      $isAdmin: isAdmin,
      $token: token,
    });
    if (!newUserId) {
      throw new Error("Database error! Failed to update user");
    }
    const user = await promisifyDbGet(SQL_USERS.SELECT_BY_ID, { $id: newUserId });
    return user ? new User(user) : null;
  } catch (err) {
    return err;
  }
};
