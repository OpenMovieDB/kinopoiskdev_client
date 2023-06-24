import { IQueryFields } from '../interfaces/query-fields.interface';

export interface ReviewFields extends IQueryFields {
  StringFields: 'title' | 'type' | 'review' | 'author';
  DateFields: 'date';
  NumberFields: 'movieId' | 'id' | 'authorId';
  BooleanFields: never;
}
