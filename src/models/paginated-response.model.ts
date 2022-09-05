export class PaginatedResponse {
  data: any[];
  count: number;

  constructor(response?) {
    response = response || {};
    this.data = response.data || [];
    this.count = response.count || 0;
  }
}