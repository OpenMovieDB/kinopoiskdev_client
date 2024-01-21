import { QueryBuilderFields, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectReviewFields = 'id' | 'movieId' | 'title' | 'type' | 'review' | 'date' | 'author' | 'authorId' | 'updatedAt' | 'createdAt'

enum RequestReviewFields {
  'id' = 'id',
  'movieId' = 'movieId',
  'title' = 'title',
  'type' = 'type',
  'review' = 'review',
  'date' = 'date',
  'author' = 'author',
  'authorId' = 'authorId',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type ReviewDto = Partial<{
  notNullFields: RequestReviewFields[]
  sortField: RequestReviewFields[]
  selectFields: SelectReviewFields[];
  sortType: SortType;

  [RequestReviewFields.id]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestReviewFields.movieId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestReviewFields.authorId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestReviewFields.author]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestReviewFields.type]: WrapperQueryBuilderFieldsType<'Негативный' | 'Нейтральный' | 'Позитивный',
    QueryBuilderFields.$range
  >;
  [RequestReviewFields.date]: WrapperQueryBuilderFieldsTypeDate
  [RequestReviewFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestReviewFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>