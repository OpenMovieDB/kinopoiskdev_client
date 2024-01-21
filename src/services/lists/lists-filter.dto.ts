import { QueryBuilderFields, QueryBuilderFieldsPageLimit, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectListFields = 'name' | 'category' | 'slug' | 'moviesCount' | 'cover' | 'updatedAt' | 'createdAt'

enum RequestListFields {
  'name' = 'name',
  'category' = 'category',
  'slug' = 'slug',
  'moviesCount' = 'moviesCount',
  'coverUrl' = 'cover.url',
  'coverPreviewUrl' = 'cover.previewUrl',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type ListDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestListFields[]
  sortField: RequestListFields[]
  selectFields: SelectListFields[];
  sortType: SortType;

  [RequestListFields.slug]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestListFields.category]: WrapperQueryBuilderFieldsType<'Онлайн-кинотеатр' | 'Премии' | 'Сборы' | 'Сериалы' | 'Фильмы',
    QueryBuilderFields.$range
  >;
  [RequestListFields.moviesCount]: WrapperQueryBuilderFieldsType<number>;
  [RequestListFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestListFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>