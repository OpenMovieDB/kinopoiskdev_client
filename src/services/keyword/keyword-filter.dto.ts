import { QueryBuilderFields, QueryBuilderFieldsPageLimit, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectKeywordFields = 'id' | 'movies' | 'title' | 'updatedAt' | 'createdAt'

enum RequestKeywordFields {
  'id' = 'id',
  'moviesId' = 'moviesId',
  'title' = 'title',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type KeywordDto = Partial<{
  notNullFields: RequestKeywordFields[]
  sortField: RequestKeywordFields[]
  selectFields: SelectKeywordFields[];
  sortType: SortType;

  [RequestKeywordFields.id]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestKeywordFields.moviesId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestKeywordFields.title]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestKeywordFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestKeywordFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
} & QueryBuilderFieldsPageLimit>