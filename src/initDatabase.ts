import * as sqlite from 'sqlite3';
import { createTables } from './database-operations/tables';
import { CONSOLE_LOGS } from './helpers/console-logs';


const sqlite3 = sqlite.verbose();

export const db = new sqlite3.Database(
    './db/FreelancerArtifact.db',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    err => CONSOLE_LOGS.DATABASE.create(err)
);

const main = () => {
    createTables();
    
    db.close(err => CONSOLE_LOGS.DATABASE.close(err));
}

main();
