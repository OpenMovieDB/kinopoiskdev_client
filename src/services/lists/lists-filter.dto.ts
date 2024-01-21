import { QueryBuilderFields, QueryBuilderFieldsPageLimit, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectListsFields = 'name' | 'category' | 'slug' | 'moviesCount' | 'cover' | 'updatedAt' | 'createdAt'

enum RequestListsFields {
  'name' = 'name',
  'category' = 'category',
  'slug' = 'slug',
  'moviesCount' = 'moviesCount',
  'coverUrl' = 'cover.url',
  'coverPreviewUrl' = 'cover.previewUrl',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type ListsDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestListsFields[]
  sortField: RequestListsFields[]
  selectFields: SelectListsFields[];
  sortType: SortType;

  [RequestListsFields.slug]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestListsFields.category]: WrapperQueryBuilderFieldsType<'Онлайн-кинотеатр' | 'Премии' | 'Сборы' | 'Сериалы' | 'Фильмы',
    QueryBuilderFields.$range
  >;
  [RequestListsFields.moviesCount]: WrapperQueryBuilderFieldsType<number>;
  [RequestListsFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestListsFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>