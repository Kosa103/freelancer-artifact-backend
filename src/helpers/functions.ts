import { CONSOLE_LOGS } from '../helpers/console-logs';
import { db } from '../app';


export const promisifyDbRun = (sqlCommand: string, sqlParameters?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.run(sqlCommand, sqlParameters, function (err) {
      if (err) {
        console.error("Error running db query: ", err);
        reject(err);
      }
      resolve(this.lastID);
    });
  });
};

export const promisifyDbAll = (sqlCommand: string, sqlParameters?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.all(sqlCommand, sqlParameters, function (err, rows) {
      if (err) {
        console.error("Error running db query: ", err);
        reject(err);
      }
      resolve(rows);
    });
  });
};

export const promisifyDbGet = (sqlCommand: string, sqlParameters?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get(sqlCommand, sqlParameters, function (err, row) {
      if (err) {
        console.error("Error running db query: ", err);
        reject(err);
      }
      resolve(row);
    });
  });
};
