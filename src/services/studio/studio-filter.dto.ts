import { QueryBuilderFields, QueryBuilderFieldsPageLimit, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectStudioFields = 'id' | 'subType' | 'title' | 'type' | 'movies' | 'updatedAt' | 'createdAt'

enum RequestStudioFields {
  'id' = 'id',
  'subType' = 'subType',
  'title' = 'title',
  'type' = 'type',
  'moviesId' = 'moviesId',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type StudioDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestStudioFields[]
  sortField: RequestStudioFields[]
  selectFields: SelectStudioFields[];
  sortType: SortType;

  [RequestStudioFields.id]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestStudioFields.moviesId]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestStudioFields.type]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestStudioFields.subType]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestStudioFields.title]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestStudioFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestStudioFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>