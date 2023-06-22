import { SORT_TYPE } from '../enums/sort-type.enum';
import { SPECIAL_VALUE } from '../enums/special-value.enum';
import { IQueryFields } from '../interfaces/query-fields.interface';
import { MovieFields } from '../types/movie-fields.type';
import { PersonFields } from '../types/person-fields.type';

export abstract class QueryBuilder<T extends IQueryFields> {
  protected query: any;

  constructor() {
    this.query = {};
  }

  select(
    fields: (
      | T['BooleanFields']
      | T['NumberFields']
      | T['DateFields']
      | T['StringFields']
    )[],
  ): this {
    this.query.selectFields = fields;
    return this;
  }

  sort(
    field:
      | T['BooleanFields']
      | T['NumberFields']
      | T['DateFields']
      | T['StringFields'],
    sortType: SORT_TYPE | '1' | '-1',
  ): this {
    if (!this.query.sortField) {
      this.query.sortField = [];
      this.query.sortType = [];
    }
    this.query.sortField.push(field);
    this.query.sortType.push(sortType);
    return this;
  }

  filterExact(
    field:
      | T['BooleanFields']
      | T['NumberFields']
      | T['DateFields']
      | T['StringFields'],
    value: string | number | boolean | SPECIAL_VALUE,
  ): this {
    this.query[field] = value;
    return this;
  }

  filterRange(field: T['NumberFields'], range: [number, number]): this {
    this.query[field] = range.join('-');
    return this;
  }

  filterDateRange(field: T['DateFields'], range: [Date, Date]): this {
    this.query[field] = range
      .map(date => date.toISOString().split('T')[0])
      .join('-');
    return this;
  }

  paginate(page: number, limit: number): this {
    this.query.page = page;
    this.query.limit = limit;
    return this;
  }

  build(): any {
    return this.query;
  }
}

export class MovieQueryBuilder extends QueryBuilder<MovieFields> {}
export class PersonQueryBuilder extends QueryBuilder<PersonFields> {}
