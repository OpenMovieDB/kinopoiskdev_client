import { IQueryFields } from '../interfaces/query-fields.interface';

export interface ImageFields extends IQueryFields {
  NumberFields: 'movieId' | 'height' | 'width';
  StringFields: 'type' | 'url' | 'previewUrl' | 'language';
  DateFields: never;
  BooleanFields: never;
}
