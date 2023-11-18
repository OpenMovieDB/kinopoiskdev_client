import { Image } from './image';
/**
 * 
 * @export
 * @interface ImageDocsResponseDtoV1_4
 */
export interface ImageDocsResponseDtoV1_4 {
    /**
     * 
     * @type {Array<Image>}
     * @memberof ImageDocsResponseDtoV1_4
     */
    docs: Array<Image>;
    /**
     * Общее количество результатов
     * @type {number}
     * @memberof ImageDocsResponseDtoV1_4
     */
    total: number;
    /**
     * Количество результатов на странице
     * @type {number}
     * @memberof ImageDocsResponseDtoV1_4
     */
    limit: number;
    /**
     * Текущая страница
     * @type {number}
     * @memberof ImageDocsResponseDtoV1_4
     */
    page: number;
    /**
     * Сколько страниц всего
     * @type {number}
     * @memberof ImageDocsResponseDtoV1_4
     */
    pages: number;
}
