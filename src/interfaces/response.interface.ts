import { IResponseError } from './error.interface';

export interface IResponse<T> extends IResponseError {
  data: T | null;
}
