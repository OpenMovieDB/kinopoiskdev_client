import {
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectImageFields =
  | 'id'
  | 'movieId'
  | 'type'
  | 'language'
  | 'url'
  | 'previewUrl'
  | 'height'
  | 'width'
  | 'updatedAt'
  | 'createdAt';

type RequestImageFields =
  | 'id'
  | 'movieId'
  | 'language'
  | 'type'
  | 'url'
  | 'previewUrl'
  | 'height'
  | 'width'
  | 'updatedAt'
  | 'createdAt';

export type ImageDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestImageFields[];
  sortField: RequestImageFields[];
  selectFields: SelectImageFields[];
  sortType: SortType;

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  type: WrapperQueryBuilderFieldsType<
    | 'backdrops'
    | 'cover'
    | 'frame'
    | 'promo'
    | 'screenshot'
    | 'shooting'
    | 'still'
    | 'wallpaper',
    QueryBuilderFields.$range
  >;
  language: WrapperQueryBuilderFieldsType<
    | 'ab'
    | 'af'
    | 'am'
    | 'ar'
    | 'as'
    | 'av'
    | 'ba'
    | 'be'
    | 'bg'
    | 'bn'
    | 'ca'
    | 'ce'
    | 'cn'
    | 'cs'
    | 'cu'
    | 'cv'
    | 'da'
    | 'de',
    QueryBuilderFields.$range
  >;
  height: WrapperQueryBuilderFieldsType<number>;
  width: WrapperQueryBuilderFieldsType<number>;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
}>;
