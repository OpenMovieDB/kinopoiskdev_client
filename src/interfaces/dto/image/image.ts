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
    /**
     * 
     * @type {Date}
     * @memberof Image
     */
    updatedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Image
     */
    createdAt: Date;
}
