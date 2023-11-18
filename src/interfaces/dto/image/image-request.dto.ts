import { SortType } from "../../../enums";

export enum ImageFieldV1_4 {
  'movieId' = 'movieId',
  'type' = 'type',
  'language' = 'language',
  'url' = 'url',
  'previewUrl' = 'previewUrl',
  'height' = 'height',
  'width' = 'width',
  updatedAt = 'updatedAt',
  createdAt = 'createdAt',
}

export enum ImageSelectFieldV1_4 {
  'movieId' = 'movieId',
  'type' = 'type',
  'language' = 'language',
  'url' = 'url',
  'previewUrl' = 'previewUrl',
  'height' = 'height',
  'width' = 'width',
  updatedAt = 'updatedAt',
  createdAt = 'createdAt',
}

export enum ImageTypeV1_4 {
  'backdrops' = 'backdrops',
  'cover' = 'cover',
  'frame' = 'frame',
  'promo' = 'promo',
  'screenshot' = 'screenshot',
  'shooting' = 'shooting',
  'still' = 'still',
  'wallpaper' = 'wallpaper',
}

export enum ImageLanguageV1_4 {
  'ab' = 'ab',
  'af' = 'af',
  'am' = 'am',
  'ar' = 'ar',
  'as' = 'as',
  'av' = 'av',
  'ba' = 'ba',
  'be' = 'be',
  'bg' = 'bg',
  'bn' = 'bn',
  'ca' = 'ca',
  'ce' = 'ce',
  'cn' = 'cn',
  'cs' = 'cs',
  'cu' = 'cu',
  'cv' = 'cv',
  'da' = 'da',
  'de' = 'de',
}

export type QueryStrategyV1_4 = '!' | '+' | '';
export type WithQueryStrategyV1_4<T> = T extends string ? `${QueryStrategyV1_4}${T}` : never;

export interface ImageRequestV1_4 {
  /**
   *  Номер страницы
   * @type {number}
   * @memberof ImageRequestV1_4
   */
  page?: number;

  /**
   *  Количество элементов на странице
   * @type {number}
   * @memberof ImageRequestV1_4
   */
  limit?: number;

  /**
   *  Список полей требуемых в ответе из модели
   * @type {Array<ImageSelectFieldV1_4>}
   * @memberof ImageRequestV1_4
   */
  selectFields?: Array<ImageSelectFieldV1_4>;

  /**
   *  Список полей которые не должны быть null или пусты
   * @type {Array<ImageFieldV1_4>}
   * @memberof ImageRequestV1_4
   */
  notNullFields?: Array<ImageFieldV1_4>;

  /**
   *  Сортировка по полям из модели
   * @type {Array<ImageFieldV1_4>}
   * @memberof ImageRequestV1_4
   */
  sortField?: Array<ImageFieldV1_4>;

  /**
   *  Тип сортировки применительно к полям из sortField (пример: `"1", "-1"`)
   * @type {Array<SortType>}
   * @memberof ImageRequestV1_4
   */

  sortType?: Array<SortType>;

  /**
   *  Поиск картинок по id фильма (пример: `"666", "!666"`)
   * @type {Array<WithQueryStrategyV1_4<string>>}
   * @memberof ImageRequestV1_4
   */
  movieId?: Array<WithQueryStrategyV1_4<string>>;

  /**
   *  Поиск картинок по типу (пример: `"cover", "!cover"`)
   * @type {Array<WithQueryStrategyV1_4<ImageTypeV1_4>>}
   * @memberof ImageRequestV1_4
   */
  type?: Array<WithQueryStrategyV1_4<ImageTypeV1_4>>;

  /**
   *  Поиск картинок по языку (пример: `"en", "!de"`)
   * @type {Array<ImageLanguageV1_4>}
   * @memberof ImageRequestV1_4
   */
  language?: Array<ImageLanguageV1_4>;

  /**
   *  Поиск картинок по высоте (пример: `"1920", "360-1920"`)
   * @type {Array<WithQueryStrategyV1_4<string>>}
   * @memberof ImageRequestV1_4
   */
  height?: Array<WithQueryStrategyV1_4<string>>;

  /**
   *  Поиск картинок по ширине (пример: `"1080", "320-1080"`)
   * @type {Array<WithQueryStrategyV1_4<string>>}
   * @memberof ImageRequestV1_4
   */
  width?: Array<WithQueryStrategyV1_4<string>>;

  /**
   *  Поиск по дате обновления в базе (пример: `01.01.2020, 01.01.2020-31.12.2020`)
   * @type {Array<WithQueryStrategyV1_4<string>>}
   * @memberof ImageRequestV1_4
   */
  updatedAt?: Array<WithQueryStrategyV1_4<string>>;

  /**
   *  Поиск по дате добавления в базу (пример: `01.01.2020, 01.01.2020-31.12.2020`)
   * @type {Array<WithQueryStrategyV1_4<string>>}
   * @memberof ImageRequestV1_4
   */
  createdAt?: Array<WithQueryStrategyV1_4<string>>;
}
