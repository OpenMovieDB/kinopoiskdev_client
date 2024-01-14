import { SortType } from '../enums/sort-type.enum';
import { IQueryFields } from '../interfaces/query-fields.interface';
import { MovieFields } from '../interfaces/services/movie/movie-fields.type';
import { PersonFields } from '../interfaces/services/person/person-fields.type';
import { Pagination } from '../classes/pagination';
import {
  AllFields,
  Filter,
  SelectFields,
} from '../interfaces/query-builder.interface';
import { ReviewFields } from '../interfaces/services/review/review-fields.type';
import { SeasonFields } from '../interfaces/services/season/season-fields.type';
import { ImageFields } from '../interfaces/services/image/image-fields.type';
import { StudioFields } from '../interfaces/services/studio/studio-fields.type';

export class QueryBuilder<T extends IQueryFields>
{
  private params: any = {};

  select(fields: SelectFields<T>[]): this {
    this.params.selectFields = fields;
    return this;
  }

  sort(field: AllFields<T>, sortType: SortType | '1' | '-1'): this {
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
    value: string | number | boolean,
  ): this {
    if (!this.params[field]) this.params[field] = [];
    this.params[field].push(value);
    return this;
  }
  
  filterInclude(field: AllFields<T>, value: string | number | boolean): this {
    if (!this.params[field]) this.params[field] = [];
    this.params[field].push('%2B' + value);
    return this;
  }

  filterExclude(field: AllFields<T>, value: string | number | boolean): this {
    if (!this.params[field]) this.params[field] = [];
    this.params[field].push('%21' + value);
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
export class ReviewQueryBuilder extends QueryBuilder<ReviewFields> {}
export class SeasonQueryBuilder extends QueryBuilder<SeasonFields> {}
export class StudioQueryBuilder extends QueryBuilder<StudioFields> {}
export class ImageQueryBuilder extends QueryBuilder<ImageFields> {}
