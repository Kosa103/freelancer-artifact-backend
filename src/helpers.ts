export const CONSOLE_LOGS = {
    createTable(err, tableName: string): void {
        err
        ? console.error(`Error creating table ${tableName}: `, err)
        : console.log(`Successfully created table ${tableName}`);
    }
}