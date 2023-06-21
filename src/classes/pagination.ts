import { IPagination } from '../interfaces/pagination.interface';

export class Pagination implements IPagination {
  public page: number;
  public limit: number;
  constructor(pagination: IPagination) {
    if (!pagination) {
      this.page = 1;
      this.limit = 10;
    } else {
      const { page, limit } = pagination;
      if (page && page < 1) throw new Error('Page must be greater than 0');
      if (limit && limit < 1) throw new Error('Limit must be greater than 0');
      if (limit && limit > 250)
        throw new Error('Limit must be less than or equal to 250');
      this.page = page || 1;
      this.limit = limit || 10;
    }
  }
}
