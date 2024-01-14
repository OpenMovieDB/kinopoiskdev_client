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