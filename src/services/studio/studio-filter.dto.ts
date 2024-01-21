import {
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

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
  sortField: RequestStudioFields[];
  selectFields: SelectStudioFields[];
  sortType: SortType;

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  moviesId: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  type: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  subType: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  title: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
