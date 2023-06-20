/**
 *
 * @export
 * @interface Audience
 */
export interface Audience {
  /**
   * Количество просмотров в кино
   * @type {number}
   * @memberof Audience
   */
  count: number;
  /**
   * Страна в которой проходил показ
   * @type {string}
   * @memberof Audience
   */
  country: string;
}
/**
 *
 * @export
 * @interface BirthPlace
 */
export interface BirthPlace {
  /**
   *
   * @type {string}
   * @memberof BirthPlace
   */
  value?: string;
}
/**
 *
 * @export
 * @interface CurrencyValue
 */
export interface CurrencyValue {
  /**
   * Сумма
   * @type {number}
   * @memberof CurrencyValue
   */
  value?: number;
  /**
   * Валюта
   * @type {string}
   * @memberof CurrencyValue
   */
  currency?: string;
}
/**
 *
 * @export
 * @interface DeathPlace
 */
export interface DeathPlace {
  /**
   *
   * @type {string}
   * @memberof DeathPlace
   */
  value?: string;
}
/**
 *
 * @export
 * @interface Episode
 */
export interface Episode {
  /**
   *
   * @type {number}
   * @memberof Episode
   */
  number?: number;
  /**
   *
   * @type {string}
   * @memberof Episode
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Episode
   */
  enName?: string;
  /**
   *
   * @type {string}
   * @memberof Episode
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Episode
   */
  date?: string;
}
/**
 *
 * @export
 * @interface ErrorResponseDto
 */
export interface ErrorResponseDto {
  /**
   *
   * @type {number}
   * @memberof ErrorResponseDto
   */
  statusCode: number;
  /**
   *
   * @type {string}
   * @memberof ErrorResponseDto
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof ErrorResponseDto
   */
  error: string;
}
/**
 *
 * @export
 * @interface ExternalId
 */
export interface ExternalId {
  /**
   * ID из kinopoisk HD
   * @type {string}
   * @memberof ExternalId
   */
  kpHD?: string;
  /**
   *
   * @type {string}
   * @memberof ExternalId
   */
  imdb?: string;
  /**
   *
   * @type {number}
   * @memberof ExternalId
   */
  tmdb?: number;
}
/**
 *
 * @export
 * @interface FactInMovie
 */
export interface FactInMovie {
  /**
   *
   * @type {string}
   * @memberof FactInMovie
   */
  value: string;
  /**
   *
   * @type {string}
   * @memberof FactInMovie
   */
  type: string;
  /**
   *
   * @type {boolean}
   * @memberof FactInMovie
   */
  spoiler: boolean;
}
/**
 *
 * @export
 * @interface FactInPerson
 */
export interface FactInPerson {
  /**
   *
   * @type {string}
   * @memberof FactInPerson
   */
  value?: string;
}
/**
 *
 * @export
 * @interface Fees
 */
export interface Fees {
  /**
   *
   * @type {CurrencyValue}
   * @memberof Fees
   */
  world?: CurrencyValue;
  /**
   *
   * @type {CurrencyValue}
   * @memberof Fees
   */
  russia?: CurrencyValue;
  /**
   *
   * @type {CurrencyValue}
   * @memberof Fees
   */
  usa?: CurrencyValue;
}
/**
 *
 * @export
 * @interface ForbiddenErrorResponseDto
 */
export interface ForbiddenErrorResponseDto {
  /**
   *
   * @type {number}
   * @memberof ForbiddenErrorResponseDto
   */
  statusCode: number;
  /**
   *
   * @type {string}
   * @memberof ForbiddenErrorResponseDto
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof ForbiddenErrorResponseDto
   */
  error: string;
}
/**
 *
 * @export
 * @interface Image
 */
export interface Image {
  /**
   *
   * @type {number}
   * @memberof Image
   */
  movieId: number;
  /**
   *
   * @type {string}
   * @memberof Image
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof Image
   */
  language?: string;
  /**
   *
   * @type {string}
   * @memberof Image
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof Image
   */
  previewUrl?: string;
  /**
   *
   * @type {number}
   * @memberof Image
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof Image
   */
  width?: number;
}
/**
 *
 * @export
 * @interface ImageDocsResponseDto
 */
export interface ImageDocsResponseDto {
  /**
   *
   * @type {Array<Image>}
   * @memberof ImageDocsResponseDto
   */
  docs: Array<Image>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof ImageDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof ImageDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof ImageDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof ImageDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface Images
 */
export interface Images {
  /**
   *
   * @type {number}
   * @memberof Images
   */
  postersCount: number;
  /**
   *
   * @type {number}
   * @memberof Images
   */
  backdropsCount: number;
  /**
   *
   * @type {number}
   * @memberof Images
   */
  framesCount: number;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  status?: string;
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse200
   */
  info?: { [key: string]: InlineResponse200Info };
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse200
   */
  error?: { [key: string]: InlineResponse200Info };
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse200
   */
  details?: { [key: string]: InlineResponse200Info };
}
/**
 *
 * @export
 * @interface InlineResponse200Info
 */
export interface InlineResponse200Info {
  /**
   *
   * @type {string}
   * @memberof InlineResponse200Info
   */
  status?: string;
}
/**
 *
 * @export
 * @interface InlineResponse503
 */
export interface InlineResponse503 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse503
   */
  status?: string;
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse503
   */
  info?: { [key: string]: InlineResponse200Info };
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse503
   */
  error?: { [key: string]: InlineResponse200Info };
  /**
   *
   * @type {{ [key: string]: InlineResponse200Info; }}
   * @memberof InlineResponse503
   */
  details?: { [key: string]: InlineResponse200Info };
}
/**
 *
 * @export
 * @interface ItemName
 */
export interface ItemName {
  /**
   *
   * @type {string}
   * @memberof ItemName
   */
  name?: string;
}
/**
 *
 * @export
 * @interface Keyword
 */
export interface Keyword {
  /**
   *
   * @type {string}
   * @memberof Keyword
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Keyword
   */
  title: string;
  /**
   *
   * @type {MovieFromKeyword}
   * @memberof Keyword
   */
  movies?: MovieFromKeyword;
}
/**
 *
 * @export
 * @interface KeywordDocsResponseDto
 */
export interface KeywordDocsResponseDto {
  /**
   *
   * @type {Array<Keyword>}
   * @memberof KeywordDocsResponseDto
   */
  docs: Array<Keyword>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof KeywordDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof KeywordDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof KeywordDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof KeywordDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface LinkedMovie
 */
export interface LinkedMovie {
  /**
   *
   * @type {number}
   * @memberof LinkedMovie
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof LinkedMovie
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof LinkedMovie
   */
  enName: string;
  /**
   *
   * @type {string}
   * @memberof LinkedMovie
   */
  alternativeName: string;
  /**
   *
   * @type {string}
   * @memberof LinkedMovie
   */
  type?: string;
  /**
   *
   * @type {ShortImage}
   * @memberof LinkedMovie
   */
  poster: ShortImage;
}
/**
 *
 * @export
 * @interface Logo
 */
export interface Logo {
  /**
   * Чтобы найти фильмы с этим полем, используйте: `!null`
   * @type {string}
   * @memberof Logo
   */
  url?: string;
}
/**
 *
 * @export
 * @interface MeiliMovieEntity
 */
export interface MeiliMovieEntity {
  /**
   *
   * @type {number}
   * @memberof MeiliMovieEntity
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  alternativeName: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  enName: string;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliMovieEntity
   */
  names: Array<string>;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  type: string;
  /**
   *
   * @type {number}
   * @memberof MeiliMovieEntity
   */
  year: number;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  shortDescription: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  logo: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  poster: string;
  /**
   *
   * @type {string}
   * @memberof MeiliMovieEntity
   */
  backdrop: string;
  /**
   *
   * @type {number}
   * @memberof MeiliMovieEntity
   */
  rating: number;
  /**
   *
   * @type {number}
   * @memberof MeiliMovieEntity
   */
  votes: number;
  /**
   *
   * @type {number}
   * @memberof MeiliMovieEntity
   */
  movieLength: number;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliMovieEntity
   */
  genres: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliMovieEntity
   */
  countries: Array<string>;
  /**
   *
   * @type {Array<number>}
   * @memberof MeiliMovieEntity
   */
  releaseYears: Array<number>;
}
/**
 *
 * @export
 * @interface MeiliPersonEntity
 */
export interface MeiliPersonEntity {
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  enName: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  photo: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  sex: string;
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  growth: number;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  birthday: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  death: string;
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  age: number;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  birthPlace: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  deathPlace: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  profession: Array<string>;
}
/**
 *
 * @export
 * @interface Movie
 */
export interface Movie {
  /**
   *
   * @type {number}
   * @memberof Movie
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Movie
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Movie
   */
  rating: number;
}
/**
 *
 * @export
 * @interface MovieAwardDocsResponseDto
 */
export interface MovieAwardDocsResponseDto {
  /**
   *
   * @type {Array<PartialTypeClass>}
   * @memberof MovieAwardDocsResponseDto
   */
  docs: Array<PartialTypeClass>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof MovieAwardDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof MovieAwardDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof MovieAwardDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof MovieAwardDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface MovieDocsResponseDtoV1
 */
export interface MovieDocsResponseDtoV1 {
  /**
   *
   * @type {Array<MovieDtoV1>}
   * @memberof MovieDocsResponseDtoV1
   */
  docs: Array<MovieDtoV1>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof MovieDocsResponseDtoV1
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof MovieDocsResponseDtoV1
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof MovieDocsResponseDtoV1
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof MovieDocsResponseDtoV1
   */
  pages: number;
}
/**
 *
 * @export
 * @interface MovieDocsResponseDtoV13
 */
export interface MovieDocsResponseDtoV13 {
  /**
   *
   * @type {Array<MovieDtoV13>}
   * @memberof MovieDocsResponseDtoV13
   */
  docs: Array<MovieDtoV13>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof MovieDocsResponseDtoV13
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof MovieDocsResponseDtoV13
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof MovieDocsResponseDtoV13
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof MovieDocsResponseDtoV13
   */
  pages: number;
}
/**
 *
 * @export
 * @interface MovieDtoV1
 */
export interface MovieDtoV1 {
  /**
   * Id фильма с кинопоиска
   * @type {number}
   * @memberof MovieDtoV1
   */
  id: number;
  /**
   *
   * @type {ExternalId}
   * @memberof MovieDtoV1
   */
  externalId: ExternalId;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV1
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV1
   */
  alternativeName?: string;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV1
   */
  enName?: string;
  /**
   *
   * @type {Array<Name>}
   * @memberof MovieDtoV1
   */
  names: Array<Name>;
  /**
   * Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show
   * @type {string}
   * @memberof MovieDtoV1
   */
  type: string;
  /**
   * Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
   * @type {number}
   * @memberof MovieDtoV1
   */
  typeNumber: number;
  /**
   * Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030
   * @type {number}
   * @memberof MovieDtoV1
   */
  year?: number;
  /**
   * Описание тайтла
   * @type {string}
   * @memberof MovieDtoV1
   */
  description?: string;
  /**
   * Сокращенное описание
   * @type {string}
   * @memberof MovieDtoV1
   */
  shortDescription?: string;
  /**
   * Слоган
   * @type {string}
   * @memberof MovieDtoV1
   */
  slogan?: string;
  /**
   * Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production
   * @type {string}
   * @memberof MovieDtoV1
   */
  status?: string;
  /**
   *
   * @type {Rating}
   * @memberof MovieDtoV1
   */
  rating?: Rating;
  /**
   *
   * @type {Votes}
   * @memberof MovieDtoV1
   */
  votes?: Votes;
  /**
   * Продолжительность фильма
   * @type {number}
   * @memberof MovieDtoV1
   */
  movieLength?: number;
  /**
   * Возрастной рейтинг по MPAA
   * @type {string}
   * @memberof MovieDtoV1
   */
  ratingMpaa?: string;
  /**
   * Возрастной рейтинг
   * @type {number}
   * @memberof MovieDtoV1
   */
  ageRating?: number;
  /**
   *
   * @type {Logo}
   * @memberof MovieDtoV1
   */
  logo?: Logo;
  /**
   *
   * @type {ShortImage}
   * @memberof MovieDtoV1
   */
  poster?: ShortImage;
  /**
   *
   * @type {ShortImage}
   * @memberof MovieDtoV1
   */
  backdrop?: ShortImage;
  /**
   *
   * @type {VideoTypes}
   * @memberof MovieDtoV1
   */
  videos?: VideoTypes;
  /**
   *
   * @type {Array<ItemName>}
   * @memberof MovieDtoV1
   */
  genres?: Array<ItemName>;
  /**
   *
   * @type {Array<ItemName>}
   * @memberof MovieDtoV1
   */
  countries?: Array<ItemName>;
  /**
   *
   * @type {Array<PersonInMovie>}
   * @memberof MovieDtoV1
   */
  persons?: Array<PersonInMovie>;
  /**
   *
   * @type {ReviewInfo}
   * @memberof MovieDtoV1
   */
  reviewInfo?: ReviewInfo;
  /**
   *
   * @type {Array<SeasonInfo>}
   * @memberof MovieDtoV1
   */
  seasonsInfo?: Array<SeasonInfo>;
  /**
   *
   * @type {CurrencyValue}
   * @memberof MovieDtoV1
   */
  budget?: CurrencyValue;
  /**
   *
   * @type {Fees}
   * @memberof MovieDtoV1
   */
  fees?: Fees;
  /**
   *
   * @type {Premiere}
   * @memberof MovieDtoV1
   */
  premiere?: Premiere;
  /**
   *
   * @type {Array<LinkedMovie>}
   * @memberof MovieDtoV1
   */
  similarMovies?: Array<LinkedMovie>;
  /**
   *
   * @type {Array<LinkedMovie>}
   * @memberof MovieDtoV1
   */
  sequelsAndPrequels?: Array<LinkedMovie>;
  /**
   *
   * @type {Watchability}
   * @memberof MovieDtoV1
   */
  watchability?: Watchability;
  /**
   *
   * @type {Array<YearRange>}
   * @memberof MovieDtoV1
   */
  releaseYears?: Array<YearRange>;
  /**
   * Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @type {number}
   * @memberof MovieDtoV1
   */
  top10?: number;
  /**
   * Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @type {number}
   * @memberof MovieDtoV1
   */
  top250?: number;
  /**
   *
   * @type {Array<FactInMovie>}
   * @memberof MovieDtoV1
   */
  facts: Array<FactInMovie>;
  /**
   *
   * @type {Images}
   * @memberof MovieDtoV1
   */
  imagesInfo: Images;
  /**
   *
   * @type {Array<VendorImage>}
   * @memberof MovieDtoV1
   */
  productionCompanies: Array<VendorImage>;
}
/**
 *
 * @export
 * @interface MovieDtoV13
 */
export interface MovieDtoV13 {
  /**
   * Id фильма с кинопоиска
   * @type {number}
   * @memberof MovieDtoV13
   */
  id: number;
  /**
   *
   * @type {ExternalId}
   * @memberof MovieDtoV13
   */
  externalId: ExternalId;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV13
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV13
   */
  alternativeName?: string;
  /**
   *
   * @type {string}
   * @memberof MovieDtoV13
   */
  enName?: string;
  /**
   *
   * @type {Array<Name>}
   * @memberof MovieDtoV13
   */
  names: Array<Name>;
  /**
   * Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show
   * @type {string}
   * @memberof MovieDtoV13
   */
  type: string;
  /**
   * Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
   * @type {number}
   * @memberof MovieDtoV13
   */
  typeNumber: number;
  /**
   * Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030
   * @type {number}
   * @memberof MovieDtoV13
   */
  year?: number;
  /**
   * Описание тайтла
   * @type {string}
   * @memberof MovieDtoV13
   */
  description?: string;
  /**
   * Сокращенное описание
   * @type {string}
   * @memberof MovieDtoV13
   */
  shortDescription?: string;
  /**
   * Слоган
   * @type {string}
   * @memberof MovieDtoV13
   */
  slogan?: string;
  /**
   * Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production
   * @type {string}
   * @memberof MovieDtoV13
   */
  status?: string;
  /**
   *
   * @type {Rating}
   * @memberof MovieDtoV13
   */
  rating?: Rating;
  /**
   *
   * @type {Votes}
   * @memberof MovieDtoV13
   */
  votes?: Votes;
  /**
   * Продолжительность фильма
   * @type {number}
   * @memberof MovieDtoV13
   */
  movieLength?: number;
  /**
   * Возрастной рейтинг по MPAA
   * @type {string}
   * @memberof MovieDtoV13
   */
  ratingMpaa?: string;
  /**
   * Возрастной рейтинг
   * @type {number}
   * @memberof MovieDtoV13
   */
  ageRating?: number;
  /**
   *
   * @type {Logo}
   * @memberof MovieDtoV13
   */
  logo?: Logo;
  /**
   *
   * @type {ShortImage}
   * @memberof MovieDtoV13
   */
  poster?: ShortImage;
  /**
   *
   * @type {ShortImage}
   * @memberof MovieDtoV13
   */
  backdrop?: ShortImage;
  /**
   *
   * @type {VideoTypes}
   * @memberof MovieDtoV13
   */
  videos?: VideoTypes;
  /**
   *
   * @type {Array<ItemName>}
   * @memberof MovieDtoV13
   */
  genres?: Array<ItemName>;
  /**
   *
   * @type {Array<ItemName>}
   * @memberof MovieDtoV13
   */
  countries?: Array<ItemName>;
  /**
   *
   * @type {Array<PersonInMovie>}
   * @memberof MovieDtoV13
   */
  persons?: Array<PersonInMovie>;
  /**
   *
   * @type {ReviewInfo}
   * @memberof MovieDtoV13
   */
  reviewInfo?: ReviewInfo;
  /**
   *
   * @type {Array<SeasonInfo>}
   * @memberof MovieDtoV13
   */
  seasonsInfo?: Array<SeasonInfo>;
  /**
   *
   * @type {CurrencyValue}
   * @memberof MovieDtoV13
   */
  budget?: CurrencyValue;
  /**
   *
   * @type {Fees}
   * @memberof MovieDtoV13
   */
  fees?: Fees;
  /**
   *
   * @type {Premiere}
   * @memberof MovieDtoV13
   */
  premiere?: Premiere;
  /**
   *
   * @type {Array<LinkedMovie>}
   * @memberof MovieDtoV13
   */
  similarMovies?: Array<LinkedMovie>;
  /**
   *
   * @type {Array<LinkedMovie>}
   * @memberof MovieDtoV13
   */
  sequelsAndPrequels?: Array<LinkedMovie>;
  /**
   *
   * @type {Watchability}
   * @memberof MovieDtoV13
   */
  watchability?: Watchability;
  /**
   *
   * @type {Array<YearRange>}
   * @memberof MovieDtoV13
   */
  releaseYears?: Array<YearRange>;
  /**
   * Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @type {number}
   * @memberof MovieDtoV13
   */
  top10?: number;
  /**
   * Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @type {number}
   * @memberof MovieDtoV13
   */
  top250?: number;
  /**
   * Признак того, что тайтл находится в прокате
   * @type {boolean}
   * @memberof MovieDtoV13
   */
  ticketsOnSale?: boolean;
  /**
   * Продолжительность всех серий
   * @type {number}
   * @memberof MovieDtoV13
   */
  totalSeriesLength?: number;
  /**
   * Средняя продолжительность серии
   * @type {number}
   * @memberof MovieDtoV13
   */
  seriesLength?: number;
  /**
   * Признак сериала
   * @type {boolean}
   * @memberof MovieDtoV13
   */
  isSeries: boolean;
  /**
   *
   * @type {Array<Audience>}
   * @memberof MovieDtoV13
   */
  audience?: Array<Audience>;
  /**
   *
   * @type {Array<FactInMovie>}
   * @memberof MovieDtoV13
   */
  facts: Array<FactInMovie>;
  /**
   *
   * @type {Images}
   * @memberof MovieDtoV13
   */
  imagesInfo: Images;
  /**
   *
   * @type {Array<VendorImage>}
   * @memberof MovieDtoV13
   */
  productionCompanies: Array<VendorImage>;
}
/**
 *
 * @export
 * @interface MovieFromKeyword
 */
export interface MovieFromKeyword {
  /**
   *
   * @type {number}
   * @memberof MovieFromKeyword
   */
  id?: number;
}
/**
 *
 * @export
 * @interface MovieFromStudio
 */
export interface MovieFromStudio {
  /**
   *
   * @type {number}
   * @memberof MovieFromStudio
   */
  id?: number;
}
/**
 *
 * @export
 * @interface MovieInPerson
 */
export interface MovieInPerson {
  /**
   *
   * @type {number}
   * @memberof MovieInPerson
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  alternativeName?: string;
  /**
   *
   * @type {number}
   * @memberof MovieInPerson
   */
  rating?: number;
  /**
   *
   * @type {boolean}
   * @memberof MovieInPerson
   */
  general?: boolean;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  enProfession?: string;
}
/**
 *
 * @export
 * @interface Name
 */
export interface Name {
  /**
   *
   * @type {string}
   * @memberof Name
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Name
   */
  language?: string;
  /**
   *
   * @type {string}
   * @memberof Name
   */
  type?: string;
}
/**
 *
 * @export
 * @interface Nomination
 */
export interface Nomination {
  /**
   *
   * @type {NominationAward}
   * @memberof Nomination
   */
  award: NominationAward;
  /**
   *
   * @type {string}
   * @memberof Nomination
   */
  title: string;
}
/**
 *
 * @export
 * @interface NominationAward
 */
export interface NominationAward {
  /**
   *
   * @type {string}
   * @memberof NominationAward
   */
  title: string;
  /**
   *
   * @type {number}
   * @memberof NominationAward
   */
  year: number;
}
/**
 *
 * @export
 * @interface PartialTypeClass
 */
export interface PartialTypeClass {
  /**
   *
   * @type {Nomination}
   * @memberof PartialTypeClass
   */
  nomination?: Nomination;
  /**
   *
   * @type {boolean}
   * @memberof PartialTypeClass
   */
  winning?: boolean;
  /**
   *
   * @type {number}
   * @memberof PartialTypeClass
   */
  movieId?: number;
}
/**
 *
 * @export
 * @interface Person
 */
export interface Person {
  /**
   *
   * @type {number}
   * @memberof Person
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  enName?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  photo?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  sex?: string;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  growth?: number;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  birthday?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  death?: string;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  age?: number;
  /**
   *
   * @type {Array<BirthPlace>}
   * @memberof Person
   */
  birthPlace?: Array<BirthPlace>;
  /**
   *
   * @type {Array<DeathPlace>}
   * @memberof Person
   */
  deathPlace?: Array<DeathPlace>;
  /**
   *
   * @type {Spouses}
   * @memberof Person
   */
  spouses?: Spouses;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  countAwards?: number;
  /**
   *
   * @type {Array<Profession>}
   * @memberof Person
   */
  profession?: Array<Profession>;
  /**
   *
   * @type {Array<FactInPerson>}
   * @memberof Person
   */
  facts?: Array<FactInPerson>;
  /**
   *
   * @type {Array<MovieInPerson>}
   * @memberof Person
   */
  movies?: Array<MovieInPerson>;
}
/**
 *
 * @export
 * @interface PersonAward
 */
export interface PersonAward {
  /**
   *
   * @type {Nomination}
   * @memberof PersonAward
   */
  nomination: Nomination;
  /**
   *
   * @type {boolean}
   * @memberof PersonAward
   */
  winning: boolean;
  /**
   *
   * @type {number}
   * @memberof PersonAward
   */
  personId: number;
  /**
   *
   * @type {Movie}
   * @memberof PersonAward
   */
  movie: Movie;
}
/**
 *
 * @export
 * @interface PersonAwardDocsResponseDto
 */
export interface PersonAwardDocsResponseDto {
  /**
   *
   * @type {Array<PersonAward>}
   * @memberof PersonAwardDocsResponseDto
   */
  docs: Array<PersonAward>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof PersonAwardDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof PersonAwardDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof PersonAwardDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof PersonAwardDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface PersonDocsResponseDto
 */
export interface PersonDocsResponseDto {
  /**
   *
   * @type {Array<Person>}
   * @memberof PersonDocsResponseDto
   */
  docs: Array<Person>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof PersonDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof PersonDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof PersonDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof PersonDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface PersonInMovie
 */
export interface PersonInMovie {
  /**
   * Id персоны с кинопоиска
   * @type {number}
   * @memberof PersonInMovie
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  photo?: string;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  enName?: string;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  profession: string;
  /**
   *
   * @type {string}
   * @memberof PersonInMovie
   */
  enProfession: string;
}
/**
 *
 * @export
 * @interface PossibleValueDto
 */
export interface PossibleValueDto {
  /**
   * Значение по которому нужно делать запрос в базу данных
   * @type {string}
   * @memberof PossibleValueDto
   */
  name: string;
  /**
   * Вспомогательное значение
   * @type {string}
   * @memberof PossibleValueDto
   */
  slug: string;
}
/**
 *
 * @export
 * @interface Premiere
 */
export interface Premiere {
  /**
   *
   * @type {string}
   * @memberof Premiere
   */
  country?: string;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @type {Date}
   * @memberof Premiere
   */
  world?: Date;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @type {Date}
   * @memberof Premiere
   */
  russia?: Date;
  /**
   *
   * @type {string}
   * @memberof Premiere
   */
  digital?: string;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @type {Date}
   * @memberof Premiere
   */
  cinema?: Date;
  /**
   *
   * @type {string}
   * @memberof Premiere
   */
  bluray: string;
  /**
   *
   * @type {string}
   * @memberof Premiere
   */
  dvd: string;
}
/**
 *
 * @export
 * @interface Profession
 */
export interface Profession {
  /**
   *
   * @type {string}
   * @memberof Profession
   */
  value?: string;
}
/**
 *
 * @export
 * @interface Rating
 */
export interface Rating {
  /**
   * Рейтинг кинопоиска
   * @type {number}
   * @memberof Rating
   */
  kp?: number;
  /**
   * Рейтинг IMDB
   * @type {number}
   * @memberof Rating
   */
  imdb?: number;
  /**
   * Рейтинг TMDB
   * @type {number}
   * @memberof Rating
   */
  tmdb?: number;
  /**
   * Рейтинг кинокритиков
   * @type {number}
   * @memberof Rating
   */
  filmCritics?: number;
  /**
   * Рейтинг кинокритиков из РФ
   * @type {number}
   * @memberof Rating
   */
  russianFilmCritics?: number;
  /**
   * Рейтинг основанный на ожиданиях пользователей
   * @type {number}
   * @memberof Rating
   */
  _await?: number;
}
/**
 *
 * @export
 * @interface Review
 */
export interface Review {
  /**
   *
   * @type {number}
   * @memberof Review
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof Review
   */
  movieId?: number;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  review?: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  date?: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  author?: string;
  /**
   *
   * @type {number}
   * @memberof Review
   */
  authorId?: number;
  /**
   *
   * @type {number}
   * @memberof Review
   */
  userRating: number;
}
/**
 *
 * @export
 * @interface ReviewDocsResponseDto
 */
export interface ReviewDocsResponseDto {
  /**
   *
   * @type {Array<Review>}
   * @memberof ReviewDocsResponseDto
   */
  docs: Array<Review>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof ReviewDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof ReviewDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof ReviewDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof ReviewDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface ReviewInfo
 */
export interface ReviewInfo {
  /**
   *
   * @type {number}
   * @memberof ReviewInfo
   */
  count?: number;
  /**
   *
   * @type {number}
   * @memberof ReviewInfo
   */
  positiveCount?: number;
  /**
   *
   * @type {string}
   * @memberof ReviewInfo
   */
  percentage?: string;
}
/**
 *
 * @export
 * @interface SearchMovieResponseDto
 */
export interface SearchMovieResponseDto {
  /**
   *
   * @type {Array<MeiliMovieEntity>}
   * @memberof SearchMovieResponseDto
   */
  docs: Array<MeiliMovieEntity>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof SearchMovieResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof SearchMovieResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof SearchMovieResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof SearchMovieResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface SearchPersonResponseDto
 */
export interface SearchPersonResponseDto {
  /**
   *
   * @type {Array<MeiliPersonEntity>}
   * @memberof SearchPersonResponseDto
   */
  docs: Array<MeiliPersonEntity>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof SearchPersonResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof SearchPersonResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof SearchPersonResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof SearchPersonResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface Season
 */
export interface Season {
  /**
   *
   * @type {number}
   * @memberof Season
   */
  movieId?: number;
  /**
   *
   * @type {number}
   * @memberof Season
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof Season
   */
  episodesCount?: number;
  /**
   *
   * @type {Array<Episode>}
   * @memberof Season
   */
  episodes?: Array<Episode>;
}
/**
 *
 * @export
 * @interface SeasonDocsResponseDto
 */
export interface SeasonDocsResponseDto {
  /**
   *
   * @type {Array<Season>}
   * @memberof SeasonDocsResponseDto
   */
  docs: Array<Season>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof SeasonDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof SeasonDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof SeasonDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof SeasonDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface SeasonInfo
 */
export interface SeasonInfo {
  /**
   *
   * @type {number}
   * @memberof SeasonInfo
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof SeasonInfo
   */
  episodesCount?: number;
}
/**
 *
 * @export
 * @interface ShortImage
 */
export interface ShortImage {
  /**
   * Чтобы найти фильмы с этим полем, используйте: `!null`
   * @type {string}
   * @memberof ShortImage
   */
  url?: string;
  /**
   * Чтобы найти фильмы с этим полем, используйте: `!null`
   * @type {string}
   * @memberof ShortImage
   */
  previewUrl?: string;
}
/**
 *
 * @export
 * @interface Spouses
 */
export interface Spouses {
  /**
   *
   * @type {number}
   * @memberof Spouses
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  name?: string;
  /**
   *
   * @type {boolean}
   * @memberof Spouses
   */
  divorced?: boolean;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  divorcedReason?: string;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  sex?: string;
  /**
   *
   * @type {number}
   * @memberof Spouses
   */
  children?: number;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  relation?: string;
}
/**
 *
 * @export
 * @interface Studio
 */
export interface Studio {
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  subType: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  type?: Studio.TypeEnum;
  /**
   *
   * @type {MovieFromStudio}
   * @memberof Studio
   */
  movies?: MovieFromStudio;
}

/**
 * @export
 * @namespace Studio
 */
export namespace Studio {
  /**
   * @export
   * @enum {string}
   */
  export enum TypeEnum {
    _0 = <any>'Производство',
    _1 = <any>'Спецэффекты',
    _2 = <any>'Прокат',
    _3 = <any>'Студия дубляжа',
  }
}
/**
 *
 * @export
 * @interface StudioDocsResponseDto
 */
export interface StudioDocsResponseDto {
  /**
   *
   * @type {Array<Studio>}
   * @memberof StudioDocsResponseDto
   */
  docs: Array<Studio>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof StudioDocsResponseDto
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof StudioDocsResponseDto
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof StudioDocsResponseDto
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof StudioDocsResponseDto
   */
  pages: number;
}
/**
 *
 * @export
 * @interface UnauthorizedErrorResponseDto
 */
export interface UnauthorizedErrorResponseDto {
  /**
   *
   * @type {number}
   * @memberof UnauthorizedErrorResponseDto
   */
  statusCode: number;
  /**
   *
   * @type {string}
   * @memberof UnauthorizedErrorResponseDto
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof UnauthorizedErrorResponseDto
   */
  error: string;
}
/**
 *
 * @export
 * @interface VendorImage
 */
export interface VendorImage {
  /**
   *
   * @type {string}
   * @memberof VendorImage
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof VendorImage
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof VendorImage
   */
  previewUrl?: string;
}
/**
 *
 * @export
 * @interface Video
 */
export interface Video {
  /**
   * Url трейлера
   * @type {string}
   * @memberof Video
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof Video
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Video
   */
  site?: string;
  /**
   *
   * @type {string}
   * @memberof Video
   */
  type?: string;
  /**
   *
   * @type {number}
   * @memberof Video
   */
  size: number;
}
/**
 *
 * @export
 * @interface VideoTypes
 */
export interface VideoTypes {
  /**
   *
   * @type {Array<Video>}
   * @memberof VideoTypes
   */
  trailers?: Array<Video>;
  /**
   *
   * @type {Array<Video>}
   * @memberof VideoTypes
   */
  teasers: Array<Video>;
}
/**
 *
 * @export
 * @interface Votes
 */
export interface Votes {
  /**
   *
   * @type {string}
   * @memberof Votes
   */
  kp?: string;
  /**
   *
   * @type {string}
   * @memberof Votes
   */
  imdb?: string;
  /**
   *
   * @type {number}
   * @memberof Votes
   */
  tmdb?: number;
  /**
   * Количество голосов кинокритиков
   * @type {number}
   * @memberof Votes
   */
  filmCritics?: number;
  /**
   * Количество голосов кинокритиков из РФ
   * @type {number}
   * @memberof Votes
   */
  russianFilmCritics?: number;
  /**
   * Количество ожидающих выхода
   * @type {number}
   * @memberof Votes
   */
  _await?: number;
}
/**
 *
 * @export
 * @interface Watchability
 */
export interface Watchability {
  /**
   *
   * @type {Array<WatchabilityItem>}
   * @memberof Watchability
   */
  items?: Array<WatchabilityItem>;
}
/**
 *
 * @export
 * @interface WatchabilityItem
 */
export interface WatchabilityItem {
  /**
   *
   * @type {string}
   * @memberof WatchabilityItem
   */
  name?: string;
  /**
   *
   * @type {Logo}
   * @memberof WatchabilityItem
   */
  logo: Logo;
  /**
   *
   * @type {string}
   * @memberof WatchabilityItem
   */
  url: string;
}
/**
 *
 * @export
 * @interface YearRange
 */
export interface YearRange {
  /**
   * Год начала
   * @type {number}
   * @memberof YearRange
   */
  start?: number;
  /**
   * Год окончания
   * @type {number}
   * @memberof YearRange
   */
  end?: number;
}
