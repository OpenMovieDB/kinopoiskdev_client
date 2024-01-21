import {
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

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
  sortField: RequestKeywordFields[];
  selectFields: SelectKeywordFields[];
  sortType: SortType;

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  moviesId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  title: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
}>;
