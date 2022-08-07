export class Scanner {
  id: number;
  name: string;
  scanRange: number;
  cargoScanRange: number;
  price: number;

  constructor(scanner?) {
    scanner = scanner || {};
    this.id = scanner.id || null;
    this.name = scanner.name || "";
    this.scanRange = scanner.scanRange || null;
    this.cargoScanRange = scanner.cargoScanRange || null;
    this.price = scanner.price || null;
  }
}
