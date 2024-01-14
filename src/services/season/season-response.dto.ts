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
