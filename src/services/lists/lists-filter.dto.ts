import {
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectListsFields =
  | 'name'
  | 'category'
  | 'slug'
  | 'moviesCount'
  | 'cover'
  | 'updatedAt'
  | 'createdAt';

type RequestListsFields =
  | 'name'
  | 'category'
  | 'slug'
  | 'moviesCount'
  | 'cover.url'
  | 'cover.previewUrl'
  | 'updatedAt'
  | 'createdAt';

export type ListsDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestListsFields[];
  sortField: RequestListsFields[];
  selectFields: SelectListsFields[];
  sortType: SortType;

  slug: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  category: WrapperQueryBuilderFieldsType<
    'Онлайн-кинотеатр' | 'Премии' | 'Сборы' | 'Сериалы' | 'Фильмы',
    QueryBuilderFields.$range
  >;
  moviesCount: WrapperQueryBuilderFieldsType<number>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
