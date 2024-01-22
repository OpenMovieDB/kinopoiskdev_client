import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectReviewFields =
  | 'id'
  | 'movieId'
  | 'title'
  | 'type'
  | 'review'
  | 'date'
  | 'author'
  | 'authorId'
  | 'updatedAt'
  | 'createdAt';

type RequestReviewFields =
  | 'id'
  | 'movieId'
  | 'title'
  | 'type'
  | 'review'
  | 'date'
  | 'author'
  | 'authorId'
  | 'updatedAt'
  | 'createdAt';

export type ReviewDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestReviewFields[];
  sort: QueryBuilderFieldSort<RequestReviewFields>;
  selectFields: SelectReviewFields[];

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  movieId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  authorId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  author: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  type: WrapperQueryBuilderFieldsType<
    'Негативный' | 'Нейтральный' | 'Позитивный',
    QueryBuilderFields.$range
  >;
  date: WrapperQueryBuilderFieldsTypeDate;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
