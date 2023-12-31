import { IQueryFields } from '../interfaces/query-fields.interface';

export interface StudioFields extends IQueryFields {
  StringFields: 'title' | 'subType' | 'type';
  NumberFields: 'id' | 'movies.id';
  DateFields: never;
  BooleanFields: never;
  ObjectFields: 'movies';
}
