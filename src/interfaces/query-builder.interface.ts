import { IQueryFields } from './query-fields.interface';
import { SORT_TYPE } from '../enums/sort-type.enum';
import { SPECIAL_VALUE } from '../enums/special-value.enum';

export type AllFields<T extends IQueryFields> =
  | T['BooleanFields']
  | T['NumberFields']
  | T['DateFields']
  | T['StringFields'];

export type SelectFields<T extends IQueryFields> =
  | AllFields<T>
  | T['ObjectFields'];

export type FiltersValue =
  | string
  | number
  | boolean
  | SPECIAL_VALUE
  | (string | number | boolean | SPECIAL_VALUE)[];

export type Filter<T extends IQueryFields> = Partial<{
  [key in
    | AllFields<T>
    | 'selectFields'
    | 'sortField'
    | 'sortType'
    | 'page'
    | 'limit']: FiltersValue;
}>;

export type SearchFilter = Partial<{
  [key in 'query' | 'page' | 'limit']: FiltersValue;
}>;

export interface IQueryBuilder<T extends IQueryFields> {
  select(fields: SelectFields<T>[]): IQueryBuilder<T>;
  sort(field: AllFields<T>, sortType: SORT_TYPE | '1' | '-1'): IQueryBuilder<T>;
  filterExact(
    field: AllFields<T>,
    value: string | number | boolean | SPECIAL_VALUE,
  ): IQueryBuilder<T>;
  filterRange(
    field: T['NumberFields'],
    range: [number, number],
  ): IQueryBuilder<T>;
  filterDateRange(
    field: T['DateFields'],
    range: [Date, Date],
  ): IQueryBuilder<T>;
  query(query: string): IQueryBuilder<T>;
  paginate(page: number, limit: number): IQueryBuilder<T>;
  build(): Filter<T>;
}
