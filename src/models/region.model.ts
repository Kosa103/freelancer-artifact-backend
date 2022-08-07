export class Region {
  id: number;
  name: string;

  constructor(region?) {
    region = region || {};
    this.id = region.id || null;
    this.name = region.name || "";
  }
}
