import { QueryBuilderFields, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectImageFields = 'id' | 'movieId' | 'type' | 'language' | 'url' | 'previewUrl' | 'height' |  'width' | 'updatedAt' | 'createdAt'

enum RequestImageFields {
  'id' = 'id',
  'movieId' = 'movieId',
  'language' = 'language',
  'type' = 'type',
  'url' = 'url',
  'previewUrl' = 'previewUrl',
  'height' = 'height',
  'width' = 'width',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type ImageDto = Partial<{
  notNullFields: RequestImageFields[]
  sortField: RequestImageFields[]
  selectFields: SelectImageFields[];
  sortType: SortType;

  [RequestImageFields.id]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestImageFields.type]: WrapperQueryBuilderFieldsType<'backdrops' | 'cover' | 'frame' | 'promo' | 'screenshot' | 'shooting' | 'still' | 'wallpaper',
    QueryBuilderFields.$range
  >;
  [RequestImageFields.language]: WrapperQueryBuilderFieldsType<'ab' | 'af' | 'am' | 'ar' | 'as' | 'av' | 'ba' | 'be' | 'bg' | 'bn' | 'ca' | 'ce' | 'cn' | 'cs' | 'cu' | 'cv' | 'da' | 'de',
    QueryBuilderFields.$range
  >;
  [RequestImageFields.height]: WrapperQueryBuilderFieldsType<number>;
  [RequestImageFields.width]: WrapperQueryBuilderFieldsType<number>;
  [RequestImageFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestImageFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>