export class User {
    id: number;
    name: string;
    hash: string;
    isAdmin: boolean;

    constructor(user?) {
        user = user || {};
        this.id = user.id || null;
        this.name = user.name || "";
        this.hash = user.hash || "";
        this.isAdmin = user.isAdmin || false;
    }
}