import { SortType } from '@/interfaces/enums/sort-type.enum';
import { IQueryFields } from './query-fields.interface';
import { MovieFields } from '@/services/movie/movie-fields.dto';
import { PersonFields } from '@/services/person/person-fields.dto';

import { ReviewFields } from '@/services/review/review-fields.dto';
import { SeasonFields } from '@/services/season/season-fields.dto';
import { ImageFields } from '@/services/image/image-fields.dto';
import { StudioFields } from '@/services/studio/studio-fields.type';

import {
  AllFields,
  Filter,
  SelectFields,
} from './query-builder.interface';

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

  paginate(page = 1, limit = 10): this {
    if (page && page < 1) throw new Error('Page must be greater than 0');
    if (limit && limit < 1) throw new Error('Limit must be greater than 0');
    if (limit && limit > 250)
      throw new Error('Limit must be less than or equal to 250');

    this.params.page = page || 1;
    this.params.limit =  limit || 10;
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
