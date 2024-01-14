import { IQueryFields } from '@/core/builder/query-fields.interface';

export interface ImageFields extends IQueryFields {
  NumberFields: 'movieId' | 'height' | 'width';
  StringFields: 'type' | 'url' | 'previewUrl' | 'language';
  DateFields: never;
  BooleanFields: never;
  ObjectFields: never;
}
