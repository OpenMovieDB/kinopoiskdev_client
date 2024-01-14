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
