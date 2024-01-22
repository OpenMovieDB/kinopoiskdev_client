import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectStudioFields =
  | 'id'
  | 'subType'
  | 'title'
  | 'type'
  | 'movies'
  | 'updatedAt'
  | 'createdAt';

type RequestStudioFields =
  | 'id'
  | 'subType'
  | 'title'
  | 'type'
  | 'moviesId'
  | 'updatedAt'
  | 'createdAt';

export type StudioDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestStudioFields[];
  sort: QueryBuilderFieldSort<RequestStudioFields>
  selectFields: SelectStudioFields[];

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  moviesId: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  type: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  subType: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  title: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
