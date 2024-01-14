import { IQueryFields } from './query-fields.interface';

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
  | (string | number | boolean )[];

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