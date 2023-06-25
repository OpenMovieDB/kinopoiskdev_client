import { SORT_TYPE } from '../enums/sort-type.enum';
import { SPECIAL_VALUE } from '../enums/special-value.enum';
import { IQueryFields } from '../interfaces/query-fields.interface';
import { MovieFields } from '../types/movie-fields.type';
import { PersonFields } from '../types/person-fields.type';
import { Pagination } from '../classes/pagination';
import {
  AllFields,
  Filter,
  IQueryBuilder,
  SelectFields,
} from '../interfaces/query-builder.interface';

export abstract class QueryBuilder<T extends IQueryFields>
  implements IQueryBuilder<T>
{
  protected params: any;

  constructor() {
    this.params = {};
  }

  select(fields: SelectFields<T>[]): this {
    this.params.selectFields = fields;
    return this;
  }

  sort(field: AllFields<T>, sortType: SORT_TYPE | '1' | '-1'): this {
    if (!this.params.sortField) {
      this.params.sortField = [];
      this.params.sortType = [];
    }
    this.params.sortField.push(field);
    this.params.sortType.push(sortType);
    return this;
  }

  filterExact(
    field: AllFields<T>,
    value: string | number | boolean | SPECIAL_VALUE,
  ): this {
    if (!this.params[field]) this.params[field] = [];
    this.params[field].push(value);
    return this;
  }

  filterRange(field: T['NumberFields'], range: [number, number]): this {
    this.params[field] = range.join('-');
    return this;
  }

  filterDateRange(field: T['DateFields'], range: [Date, Date]): this {
    this.params[field] = range
      .map(date => date.toISOString().split('T')[0])
      .join('-');
    return this;
  }

  query(query: string): this {
    this.params.query = query;
    return this;
  }

  paginate(page: number, limit: number): this {
    const pagination = new Pagination(page, limit);
    this.params.page = pagination.page;
    this.params.limit = pagination.limit;
    return this;
  }

  build(): Filter<T> {
    return this.params;
  }
}

export class MovieQueryBuilder extends QueryBuilder<MovieFields> {}
export class PersonQueryBuilder extends QueryBuilder<PersonFields> {}
export class ReviewQueryBuilder extends QueryBuilder<PersonFields> {}
export class SeasonQueryBuilder extends QueryBuilder<PersonFields> {}
export class StudioQueryBuilder extends QueryBuilder<PersonFields> {}
export class ImageQueryBuilder extends QueryBuilder<PersonFields> {}
