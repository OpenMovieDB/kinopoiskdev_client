import { IQueryFields } from "../../core/builder/query-fields.interface";

export interface KeywordFields extends IQueryFields {
  StringFields: 'title';
  NumberFields: 'id' | 'movies.id';
  DateFields: never;
  BooleanFields: never;
  ObjectFields: 'movies';
}
