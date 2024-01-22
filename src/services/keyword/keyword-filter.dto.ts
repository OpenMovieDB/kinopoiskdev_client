import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectKeywordFields =
  | 'id'
  | 'movies'
  | 'title'
  | 'updatedAt'
  | 'createdAt';

type RequestKeywordFields =
  | 'id'
  | 'moviesId'
  | 'title'
  | 'updatedAt'
  | 'createdAt';

export type KeywordDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestKeywordFields[];
  selectFields: SelectKeywordFields[];
  sort: QueryBuilderFieldSort<RequestKeywordFields>

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  moviesId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  title: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
}>;
