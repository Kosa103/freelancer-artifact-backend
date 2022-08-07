export const CONSOLE_LOGS = {
  DATABASE: {
    create(err): void {
      err
        ? console.error(`Error creating/opening database: `, err)
        : console.log(`Successfully created/opened database`);
    },
    open(err): void {
      err
        ? console.error(`Error opening database: `, err)
        : console.log(`Successfully opened database`);
    },
    close(err): void {
      err
        ? console.error(`Error closing database: `, err)
        : console.log(`Successfully closed database`);
    }
  },
  TABLES: {
    create(err, tableName: string): void {
      err
        ? console.error(`Error creating table ${tableName}: `, err)
        : console.log(`Successfully created table ${tableName}`);
    },
    insert(err, tableName: string): void {
      err
        ? console.error(`Error inserting into table ${tableName}: `, err)
        : console.log(`Successfully inserted into table ${tableName}`);
    }
  },
  OPERATIONS: {
    insert(err, tableName: string): void {
      err
        ? console.error(`Error inserting into table ${tableName}: `, err)
        : console.log(`Successfully inserted into table ${tableName}`);
    }
  },
  GENERIC: {
    logError(err, location?: string): void {
      location
        ? console.error(`An error occurred at ${location}:`, err)
        : console.error(`An error occurred:`, err);
    }
  }
}

