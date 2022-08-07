export class User {
  id: number;
  email: string;
  name: string;
  hash: string;
  isAdmin: boolean;
  token: string;

  constructor(user?) {
    user = user || {};
    this.id = user.id || null;
    this.email = user.email || null;
    this.name = user.name || "";
    this.hash = user.hash || "";
    this.isAdmin = user.isAdmin || false;
    this.token = user.token || "";
  }
}