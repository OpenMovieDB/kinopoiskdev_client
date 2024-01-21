import { QueryBuilderFields, QueryBuilderFieldsPageLimit, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

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


enum RequestMovieFields {
  'id' = 'id',
  'externalIdImdb' = 'externalId.imdb',
  'externalIdTmdb' = 'externalId.tmdb',
  'externalIdKpHD' = 'externalId.kpHD',
  'name' = 'name',
  'enName' = 'enName',
  'alternativeName' = 'alternativeName',
  'names.name' = 'names.name',
  'description' = 'description',
  'shortDescription' = 'shortDescription',
  'slogan' = 'slogan',
  'type' = 'type',
  'typeNumber' = 'typeNumber',
  'isSeries' = 'isSeries',
  'status' = 'status',
  'year' = 'year',
  'releaseYearsStart' = 'releaseYears.start',
  'releaseYearsEnd' = 'releaseYears.end',
  'ratingKp' = 'rating.kp',
  'ratingImdb' = 'rating.imdb',
  'ratingTmdb' = 'rating.tmdb',
  'ratingFilmCritics' = 'rating.filmCritics',
  'ratingRussianFilmCritics' = 'rating.russianFilmCritics',
  'ratingAwait' = 'rating.await',
  'ratingMpaa' = 'ratingMpaa',
  'ageRating' = 'ageRating',
  'votesKp' = 'votes.kp',
  'votesImdb' = 'votes.imdb',
  'votesTmdb' = 'votes.tmdb',
  'votesFilmCritics' = 'votes.filmCritics',
  'votesRussianFilmCritics' = 'votes.russianFilmCritics',
  'votesAwait' = 'votes.await',
  'budgetValue' = 'budget.value',
  'budgetCurrency' = 'budget.currency',
  'audienceCount' = 'audience.count',
  'audienceCountry' = 'audience.country',
  'movieLength' = 'movieLength',
  'seriesLength' = 'seriesLength',
  'totalSeriesLength' = 'totalSeriesLength',
  'genresName' = 'genres.name',
  'countriesName' = 'countries.name',
  'poster.url' = 'poster.url',
  'backdrop.url' = 'backdrop.url',
  'logo.url' = 'logo.url',
  'ticketsOnSale' = 'ticketsOnSale',
  'videos.trailers.url' = 'videos.trailers.url',
  'videos.trailers.site' = 'videos.trailers.site',
  'videos.trailers.name' = 'videos.trailers.name',
  'networksItemsName' = 'networks.items.name',
  'networks.items.logo.url' = 'networks.items.logo.url',
  'personsId' = 'persons.id',
  'personsName' = 'persons.name',
  'personsEnName' = 'persons.enName',
  'personsPhoto' = 'persons.photo',
  'personsDescription' = 'persons.description',
  'personsProfession' = 'persons.profession',
  'personsEnProfession' = 'persons.enProfession',
  'factsType' = 'facts.type',
  'factsValue' = 'facts.value',
  'factsSpoiler' = 'facts.spoiler',
  'feesWorld' = 'fees.world',
  'feesWorldValue' = 'fees.world.value',
  'feesUsaValue' = 'fees.usa.value',
  'feesUsa' = 'fees.usa',
  'feesRussia' = 'fees.russia',
  'feesRussiaValue' = 'fees.russia.value',
  'premiereWorld' = 'premiere.world',
  'premiereUsa' = 'premiere.usa',
  'premiereRussia' = 'premiere.russia',
  'premiereDigital' = 'premiere.digital',
  'premiereDvd' = 'premiere.dvd',
  'premiereBluRay' = 'premiere.bluRay',
  'premiereCinema' = 'premiere.cinema',
  'premiereCountry' = 'premiere.country',
  'similarMoviesId' = 'similarMovies.id',
  'similarMoviesName' = 'similarMovies.name',
  'similarMoviesEnName' = 'similarMovies.enName',
  'similarMoviesAlternativeName' = 'similarMovies.alternativeName',
  'similarMoviesPosterUrl' = 'similarMovies.poster.url',
  'similarMoviesRatingKp' = 'similarMovies.rating.kp',
  'similarMoviesRatingImdb' = 'similarMovies.rating.imdb',
  'similarMoviesRatingTmdb' = 'similarMovies.rating.tmdb',
  'similarMoviesYear' = 'similarMovies.year',
  'sequelsAndPrequelsId' = 'sequelsAndPrequels.id',
  'sequelsAndPrequels.name' = 'sequelsAndPrequels.name',
  'sequelsAndPrequels.enName' = 'sequelsAndPrequels.enName',
  'sequelsAndPrequels.alternativeName' = 'sequelsAndPrequels.alternativeName',
  'sequelsAndPrequels.poster.url' = 'sequelsAndPrequels.poster.url',
  'sequelsAndPrequels.rating.kp' = 'sequelsAndPrequels.rating.kp',
  'sequelsAndPrequels.rating.imdb' = 'sequelsAndPrequels.rating.imdb',
  'sequelsAndPrequels.rating.tmdb' = 'sequelsAndPrequels.rating.tmdb',
  'sequelsAndPrequels.year' = 'sequelsAndPrequels.year',
  'watchabilityItemsName' = 'watchability.items.name',
  'watchabilityItemsUrl' = 'watchability.items.url',
  'watchability.items.logo.url' = 'watchability.items.logo.url',
  'lists' = 'lists',
  'top10' = 'top10',
  'top250' = 'top250',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt',
}

export type MovieDto =QueryBuilderFieldsPageLimit<{
  notNullFields: RequestMovieFields[]
  sortField: RequestMovieFields[]
  selectFields: SelectMovieFields[];
  sortType: SortType;
  [RequestMovieFields.isSeries]: boolean;
  [RequestMovieFields.ticketsOnSale]: boolean;
  [RequestMovieFields.id]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.externalIdImdb]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.externalIdTmdb]: WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.externalIdKpHD]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.type]: WrapperQueryBuilderFieldsType<
    'movie' | 'tv-series' | 'anime' | 'cartoon' | 'animated-series',
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.typeNumber]: WrapperQueryBuilderFieldsType<
    1 | 2 | 3 | 4 | 5,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.status]: WrapperQueryBuilderFieldsType<
    | 'announced'
    | 'completed'
    | 'filming'
    | 'post-production'
    | 'pre-production',
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.year]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.releaseYearsStart]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.releaseYearsEnd]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.ratingKp]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.ratingImdb]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.ratingTmdb]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.ratingMpaa]: WrapperQueryBuilderFieldsType<string>;
  [RequestMovieFields.ageRating]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.votesKp]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.votesTmdb]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.votesRussianFilmCritics]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.votesAwait]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.budgetValue]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.audienceCount]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.movieLength]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.seriesLength]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.totalSeriesLength]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.genresName]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.countriesName]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.networksItemsName]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.personsId]: WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.personsProfession]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.personsEnProfession]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.feesWorld]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.feesUsa]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.feesRussia]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieFields.premiereWorld]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.premiereUsa]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.premiereRussia]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.premiereDigital]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.premiereCinema]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.premiereCountry]: WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.similarMoviesId]: WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.sequelsAndPrequelsId]: WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.watchabilityItemsName]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.lists]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestMovieFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>


type SelectAwardsFields = 'movieId' | 'winning' | 'nomination' | 'updatedAt' | 'createdAt'

enum RequestMovieAwardFields {
  'movieId' = 'movieId',
  'winning' = 'winning',
  'nominationAwardTitle' = 'nomination.award.title',
  'nominationAwardYear' = 'nomination.award.year',
  'nominationTitle' = 'nomination.title',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt'
}

export type MovieAwardsDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestMovieAwardFields[]
  sortField: RequestMovieAwardFields[]
  selectFields: SelectAwardsFields[];
  sortType: SortType;

  [RequestMovieAwardFields.movieId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestMovieAwardFields.nominationTitle]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestMovieAwardFields.nominationAwardTitle]: WrapperQueryBuilderFieldsType<string,
    QueryBuilderFields.$range
  >;
  [RequestMovieAwardFields.nominationAwardYear]: WrapperQueryBuilderFieldsType<number>;
  [RequestMovieAwardFields.winning]: boolean;
  [RequestMovieAwardFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestMovieAwardFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>