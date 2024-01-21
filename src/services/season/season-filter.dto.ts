import { QueryBuilderFields, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from "@/core/builder/query-fields.interface";
import { SortType } from "@/interfaces/enums";

type SelectSeasonFields = 'movieId' | 'poster' | 'number' | 'name' | 'enName' | 'duration' | 'description' | 'enDescription' | 'episodesCount' | 'airDate' | 'updatedAt' | 'createdAt'

enum RequestSeasonFields {
  'movieId' = 'movieId',
  'posterUrl' = 'posterUrl',
  'posterPreviewUrl' = 'poster.preview.url',
  'number' = 'number',
  'enName' = 'enName',
  'episodesCount' = 'episodesCount',
  'airDate' = 'airDate',
  'duration' = 'duration',
  'description' = 'description',
  'enDescription' = 'enDescription',
  'episodesNumber' = 'episodes.number',
  'episodesName' = 'episodes.name',
  'episodesEnName' = 'episodes.enName',
  'episodesAirDate' = 'episodes.airDate',
  'episodesDescription' = 'episodes.description',
  'episodesEnDescription' = 'episodes.enDescription',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type SeasonDto = Partial<{
  notNullFields: RequestSeasonFields[]
  sortField: RequestSeasonFields[]
  selectFields: SelectSeasonFields[];
  sortType: SortType;

  [RequestSeasonFields.movieId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestSeasonFields.number]: WrapperQueryBuilderFieldsType<number>;
  [RequestSeasonFields.episodesNumber]: WrapperQueryBuilderFieldsType<number>;
  [RequestSeasonFields.airDate]: WrapperQueryBuilderFieldsTypeDate;
  [RequestSeasonFields.episodesAirDate]: WrapperQueryBuilderFieldsTypeDate;
  [RequestSeasonFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestSeasonFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>