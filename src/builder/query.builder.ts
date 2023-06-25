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
  protected query: any;

  constructor() {
    this.query = {};
  }

  select(fields: SelectFields<T>[]): this {
    this.query.selectFields = fields;
    return this;
  }

  sort(field: AllFields<T>, sortType: SORT_TYPE | '1' | '-1'): this {
    if (!this.query.sortField) {
      this.query.sortField = [];
      this.query.sortType = [];
    }
    this.query.sortField.push(field);
    this.query.sortType.push(sortType);
    return this;
  }

  filterExact(
    field: AllFields<T>,
    value: string | number | boolean | SPECIAL_VALUE,
  ): this {
    if (!this.query[field]) this.query[field] = [];
    this.query[field].push(value);
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
    const pagination = new Pagination(page, limit);
    this.query.page = pagination.page;
    this.query.limit = pagination.limit;
    return this;
  }

  build(): Filter<T> {
    return this.query;
  }
}

export class MovieQueryBuilder extends QueryBuilder<MovieFields> {}
export class PersonQueryBuilder extends QueryBuilder<PersonFields> {}
export class ReviewQueryBuilder extends QueryBuilder<PersonFields> {}
export class SeasonQueryBuilder extends QueryBuilder<PersonFields> {}
export class StudioQueryBuilder extends QueryBuilder<PersonFields> {}
export class ImageQueryBuilder extends QueryBuilder<PersonFields> {}
