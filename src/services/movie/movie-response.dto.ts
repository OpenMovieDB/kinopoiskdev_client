import { ShortImage } from "@/interfaces/response/response.interface";
import { Nomination } from "@/services/person/person-response.dto";

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
  await?: number;
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
  await?: number;
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
export interface MovieDtoV13 extends MovieDtoV1 {
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
}
/**
 *
 * @export
 * @interface LinkedMovieV14
 */
export interface LinkedMovieV14 extends LinkedMovie {
  /**
   * Рейтинг кинопоиска
   * @type {Rating}
   * @memberof Rating
   */
  rating: Rating;

  /**
   * Год
   * @type {number}
   * @memberof LinkedMovieV14
   */
  year: number;
}

export interface NetworkItemV14 {
  /**
   * Название
   * @type {string}
   * @memberof NetworkItemV14
   */
  name: string;

  /**
   * Логотип
   * @type {Logo}
   * @memberof NetworkItemV14
   */
  logo: Logo;
}
export interface NetworksV14 {
  /**
   * @type {Array<NetworkItemV14>}
   * @memberof NetworksV14
   */
  items: Array<NetworkItemV14>;
}

/**
 *
 * @export
 * @interface MovieDtoV14
 */
export interface MovieDtoV14 extends Omit<MovieDtoV13, 'productionCompanies'> {
  /**
   * Список коллекций, в которых находится тайтл.
   * @type {Array<string>}
   * @memberof MovieDtoV14
   */
  lists: Array<string>;

  /**
   * @type {Array<LinkedMovieV14>}
   * @memberof MovieDtoV14
   */
  similarMovies: Array<LinkedMovieV14>;

  /**
   * @type {Array<LinkedMovieV14>}
   * @memberof MovieDtoV14
   */
  sequelsAndPrequels: Array<LinkedMovieV14>;

  /**
   * @type {NetworksV14}
   * @memberof MovieDtoV14
   */
  networks: NetworksV14;

  /**
   * @type {Date}
   * @memberof MovieDtoV14
   */
  updatedAt: Date;

  /**
   * @type {Date}
   * @memberof MovieDtoV14
   */
  createdAt: Date;
}
