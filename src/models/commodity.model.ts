export class Commodity {
  id: number;
  name: string;
  isOre: boolean;
  isContraband: boolean;
  requiredCargo: number;

  constructor(commodity?) {
    commodity = commodity || {};
    this.id = commodity.id || null;
    this.name = commodity.name || "";
    this.isOre = commodity.isOre || false;
    this.isContraband = commodity.isContraband || false;
    this.requiredCargo = commodity.requiredCargo || null;
  }
}
