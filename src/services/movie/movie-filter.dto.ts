import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectMovieFields =
  | 'id'
  | 'externalId'
  | 'name'
  | 'enName'
  | 'alternativeName'
  | 'names'
  | 'description'
  | 'shortDescription'
  | 'slogan'
  | 'type'
  | 'typeNumber'
  | 'isSeries'
  | 'status'
  | 'year'
  | 'releaseYear'
  | 'rating'
  | 'ratingMpaa'
  | 'ageRating'
  | 'votes'
  | 'seasonsInfo'
  | 'budget'
  | 'audience'
  | 'movieLength'
  | 'seriesLength'
  | 'totalSeriesLength'
  | 'genres'
  | 'countries'
  | 'poster'
  | 'backdrop'
  | 'logo'
  | 'ticketsOnSale'
  | 'videos'
  | 'networks'
  | 'persons'
  | 'facts'
  | 'fees'
  | 'premier'
  | 'similarMovies'
  | 'sequelsAndPrequels'
  | 'watchability'
  | 'lists'
  | 'top10'
  | 'top250'
  | 'updateAt'
  | 'createdAt';

type RequestMovieFields =
  | 'id'
  | 'externalId.imdb'
  | 'externalId.tmdb'
  | 'externalId.kpHD'
  | 'name'
  | 'enName'
  | 'alternativeName'
  | 'names.name'
  | 'description'
  | 'shortDescription'
  | 'slogan'
  | 'type'
  | 'typeNumber'
  | 'isSeries'
  | 'status'
  | 'year'
  | 'releaseYears.start'
  | 'releaseYears.end'
  | 'rating.kp'
  | 'rating.imdb'
  | 'rating.tmdb'
  | 'rating.filmCritics'
  | 'rating.russianFilmCritics'
  | 'rating.await'
  | 'ratingMpaa'
  | 'ageRating'
  | 'votes.kp'
  | 'votes.imdb'
  | 'votes.tmdb'
  | 'votes.filmCritics'
  | 'votes.russianFilmCritics'
  | 'votes.await'
  | 'budget.value'
  | 'budget.currency'
  | 'audience.count'
  | 'audience.country'
  | 'movieLength'
  | 'seriesLength'
  | 'totalSeriesLength'
  | 'genres.name'
  | 'countries.name'
  | 'poster.url'
  | 'backdrop.url'
  | 'logo.url'
  | 'ticketsOnSale'
  | 'videos.trailers.url'
  | 'videos.trailers.site'
  | 'videos.trailers.name'
  | 'networks.items.name'
  | 'networks.items.logo.url'
  | 'persons.id'
  | 'persons.name'
  | 'persons.enName'
  | 'persons.photo'
  | 'persons.description'
  | 'persons.profession'
  | 'persons.enProfession'
  | 'facts.type'
  | 'facts.value'
  | 'facts.spoiler'
  | 'fees.world'
  | 'fees.world.value'
  | 'fees.usa.value'
  | 'fees.usa'
  | 'fees.russia'
  | 'fees.russia.value'
  | 'premiere.world'
  | 'premiere.usa'
  | 'premiere.russia'
  | 'premiere.digital'
  | 'premiere.dvd'
  | 'premiere.bluRay'
  | 'premiere.cinema'
  | 'premiere.country'
  | 'similarMovies.id'
  | 'similarMovies.name'
  | 'similarMovies.enName'
  | 'similarMovies.alternativeName'
  | 'similarMovies.poster.url'
  | 'similarMovies.rating.kp'
  | 'similarMovies.rating.imdb'
  | 'similarMovies.rating.tmdb'
  | 'similarMovies.year'
  | 'sequelsAndPrequels.id'
  | 'sequelsAndPrequels.name'
  | 'sequelsAndPrequels.enName'
  | 'sequelsAndPrequels.alternativeName'
  | 'sequelsAndPrequels.poster.url'
  | 'sequelsAndPrequels.rating.kp'
  | 'sequelsAndPrequels.rating.imdb'
  | 'sequelsAndPrequels.rating.tmdb'
  | 'sequelsAndPrequels.year'
  | 'watchability.items.name'
  | 'watchability.items.url'
  | 'watchability.items.logo.url'
  | 'lists'
  | 'top10'
  | 'top250'
  | 'updatedAt'
  | 'createdAt';

export type MovieDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestMovieFields[];
  sort: QueryBuilderFieldSort<RequestMovieFields>;
  selectFields: SelectMovieFields[];

  isSeries: boolean;
  id: WrapperQueryBuilderFieldsType<number>;
  ticketsOnSale: boolean;
  'externalId.imdb': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'externalId.tmdb': WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  'externalId.kpHD': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  type: WrapperQueryBuilderFieldsType<
    'movie' | 'tv-series' | 'anime' | 'cartoon' | 'animated-series',
    QueryBuilderFields.$range
  >;
  typeNumber: WrapperQueryBuilderFieldsType<
    1 | 2 | 3 | 4 | 5,
    QueryBuilderFields.$range
  >;
  status: WrapperQueryBuilderFieldsType<
    | 'announced'
    | 'completed'
    | 'filming'
    | 'post-production'
    | 'pre-production',
    QueryBuilderFields.$range
  >;
  year: WrapperQueryBuilderFieldsType<number>;
  'releaseYears.start': WrapperQueryBuilderFieldsType<number>;
  'releaseYears.end': WrapperQueryBuilderFieldsType<number>;
  'rating.kp': WrapperQueryBuilderFieldsType<number>;
  'rating.imdb': WrapperQueryBuilderFieldsType<number>;
  'rating.tmdb': WrapperQueryBuilderFieldsType<number>;
  ratingMpaa: WrapperQueryBuilderFieldsType<string>;
  ageRating: WrapperQueryBuilderFieldsType<number>;
  'votes.kp': WrapperQueryBuilderFieldsType<number>;
  'votes.tmdb': WrapperQueryBuilderFieldsType<number>;
  'votes.russianFilmCritics': WrapperQueryBuilderFieldsType<number>;
  'votes.await': WrapperQueryBuilderFieldsType<number>;
  'budget.value': WrapperQueryBuilderFieldsType<number>;
  'audience.count': WrapperQueryBuilderFieldsType<number>;
  movieLength: WrapperQueryBuilderFieldsType<number>;
  seriesLength: WrapperQueryBuilderFieldsType<number>;
  totalSeriesLength: WrapperQueryBuilderFieldsType<number>;
  'genres.name': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'countries.name': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'networks.items.name': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'persons.id': WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  'persons.profession': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'persons.enProfession': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'fees.world': WrapperQueryBuilderFieldsType<number>;
  'fees.usa': WrapperQueryBuilderFieldsType<number>;
  'fees.russia': WrapperQueryBuilderFieldsType<number>;
  'premiere.world': WrapperQueryBuilderFieldsTypeDate;
  'premiere.usa': WrapperQueryBuilderFieldsTypeDate;
  'premiere.russia': WrapperQueryBuilderFieldsTypeDate;
  'premiere.digital': WrapperQueryBuilderFieldsTypeDate;
  'premiere.cinema': WrapperQueryBuilderFieldsTypeDate;
  'premiere.country': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'similarMovies.id': WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  'sequelsAndPrequels.id': WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  'watchability.items.name': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  lists: WrapperQueryBuilderFieldsType<string, QueryBuilderFields.$range>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;

type SelectAwardsFields =
  | 'movieId'
  | 'winning'
  | 'nomination'
  | 'updatedAt'
  | 'createdAt';

type RequestMovieAwardFields =
  | 'movieId'
  | 'winning'
  | 'nomination.award.title'
  | 'nomination.award.year'
  | 'nomination.title'
  | 'updatedAt'
  | 'createdAt';

export type MovieAwardsDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestMovieAwardFields[];
  selectFields: SelectAwardsFields[];
  sort: QueryBuilderFieldSort<RequestMovieAwardFields>

  winning: boolean;
  movieId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  'nomination.title': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'nomination.award.title': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'nomination.award.year': WrapperQueryBuilderFieldsType<number>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;
