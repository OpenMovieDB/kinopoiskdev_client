import { ShortImage } from "@/interfaces/response/response.interface";

/**
 *
 * @export
 * @interface List
 */
export interface List {
    /**
     *
     * @type {string}
     * @memberof List
     */
    category: string;
    /**
     *
     * @type {string}
     * @memberof List
     */
    slug: string;
    /**
     *
     * @type {number}
     * @memberof List
     */
    moviesCount: number;
    /**
     *
     * @type {ShortImage}
     * @memberof List
     */
    cover: ShortImage;
    /**
     *
     * @type {string}
     * @memberof List
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof List
     */
    updatedAt: Date;
    /**
     *
     * @type {Date}
     * @memberof List
     */
    createdAt: Date;
}
