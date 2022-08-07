export class Affiliation {
  id: number;
  name: string;

  constructor(affiliation?) {
    affiliation = affiliation || {};
    this.id = affiliation.id || null;
    this.name = affiliation.name || "";
  }
}
