import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectSeasonFields =
  | 'movieId'
  | 'poster'
  | 'number'
  | 'name'
  | 'enName'
  | 'duration'
  | 'description'
  | 'enDescription'
  | 'episodesCount'
  | 'airDate'
  | 'updatedAt'
  | 'createdAt';

type RequestSeasonFields =
  | 'movieId'
  | 'posterUrl'
  | 'posterPreviewUrl'
  | 'preview.url'
  | 'number'
  | 'enName'
  | 'episodesCount'
  | 'airDate'
  | 'duration'
  | 'description'
  | 'enDescription'
  | 'episodes.number'
  | 'episodes.name'
  | 'episodes.enName'
  | 'episodes.airDate'
  | 'episodes.description'
  | 'episodes.enDescription'
  | 'updatedAt'
  | 'createdAt';

export type SeasonDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestSeasonFields[];
  sort: QueryBuilderFieldSort<RequestSeasonFields>;
  selectFields: SelectSeasonFields[];

  movieId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  number: WrapperQueryBuilderFieldsType<number>;
  'episodes.number': WrapperQueryBuilderFieldsType<number>;
  airDate: WrapperQueryBuilderFieldsTypeDate;
  'episodes.airDate': WrapperQueryBuilderFieldsTypeDate;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
