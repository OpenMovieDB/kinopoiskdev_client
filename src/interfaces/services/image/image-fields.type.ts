import { IQueryFields } from '../../query-fields.interface';

export interface ImageFields extends IQueryFields {
  NumberFields: 'movieId' | 'height' | 'width';
  StringFields: 'type' | 'url' | 'previewUrl' | 'language';
  DateFields: never;
  BooleanFields: never;
  ObjectFields: never;
}
