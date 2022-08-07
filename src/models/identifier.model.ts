export class Identifier {
  id: number;
  name: string;

  constructor(identifier?) {
    identifier = identifier || {};
    this.id = identifier.id || null;
    this.name = identifier.name || "";
  }
}
