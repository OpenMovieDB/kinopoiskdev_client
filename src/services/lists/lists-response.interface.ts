import { ShortImage } from "@/interfaces/response/response.interface";

/**
 *
 * @export
 * @interface Lists
 */
export interface Lists {
    /**
     *
     * @type {string}
     * @memberof Lists
     */
    category: string;
    /**
     *
     * @type {string}
     * @memberof Lists
     */
    slug: string;
    /**
     *
     * @type {number}
     * @memberof Lists
     */
    moviesCount: number;
    /**
     *
     * @type {ShortImage}
     * @memberof Lists
     */
    cover: ShortImage;
    /**
     *
     * @type {string}
     * @memberof Lists
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof Lists
     */
    updatedAt: Date;
    /**
     *
     * @type {Date}
     * @memberof Lists
     */
    createdAt: Date;
}
