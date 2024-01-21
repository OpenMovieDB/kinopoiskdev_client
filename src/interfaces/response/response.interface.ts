

/**
 *
 * @export
 * @interface DocsResponse
 */
export interface DocsResponse<T> {
  /**
   *
   * @type {Array<T>}
   * @memberof DocsResponse
   */
  docs: Array<T>;
  /**
   * Общее количество результатов
   * @type {number}
   * @memberof DocsResponse
   */
  total: number;
  /**
   * Количество результатов на странице
   * @type {number}
   * @memberof DocsResponse
   */
  limit: number;
  /**
   * Текущая страница
   * @type {number}
   * @memberof DocsResponse
   */
  page: number;
  /**
   * Сколько страниц всего
   * @type {number}
   * @memberof DocsResponse
   */
  pages: number;
}

/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   *
   * @type {number}
   * @memberof ErrorResponse
   */
  statusCode: number;
  /**
   *
   * @type {string}
   * @memberof ErrorResponse
   */
  message: string | null;
  /**
   *
   * @type {string}
   * @memberof ErrorResponse
   */
  error: string | null;
}

/**
 *
 * @export
 * @interface IResponse
 */
export interface IResponse<T> extends ErrorResponse {
  /**
   *
   * @type {Array<T>}
   * @memberof IResponse
   */
  data: T | null;
}

export type WrapperDocsResponseDto<T> = IResponse<DocsResponse<T>>

/**
 *
 * @export
 * @interface InlineResponseInfo
 */
export interface InlineResponseInfo {
  /**
   *
   * @type {string}
   * @memberof InlineResponseInfo
   */
  status?: string;
}

/**
 *
 * @export
 * @interface InlineResponse
 */
export interface InlineResponse {
  /**
   *
   * @type {string}
   * @memberof InlineResponse
   */
  status?: string;
  /**
   *
   * @type {{ [key: string]: InlineResponseInfo; }}
   * @memberof InlineResponse
   */
  info?: { [key: string]: InlineResponseInfo };
  /**
   *
   * @type {{ [key: string]: InlineResponseInfo; }}
   * @memberof InlineResponse
   */
  error?: { [key: string]: InlineResponseInfo };
  /**
   *
   * @type {{ [key: string]: InlineResponseInfo; }}
   * @memberof InlineResponse
   */
  details?: { [key: string]: InlineResponseInfo };
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
