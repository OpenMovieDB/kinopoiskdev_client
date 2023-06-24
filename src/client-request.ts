import { IResponseError } from './interfaces/error.interface';
import { VERSIONS } from './enums/version.enum';
import { IResponse } from './interfaces/response.interface';

export class ClientRequest {
  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string,
  ) {}

  private queryParams(params: { [key: string]: any }): string {
    const urlSearchParams = new URLSearchParams();

    for (const key in params) {
      if (Array.isArray(params[key])) {
        for (const value of params[key]) {
          urlSearchParams.append(key, value);
        }
      } else {
        urlSearchParams.append(key, params[key]);
      }
    }

    return urlSearchParams.toString();
  }

  async get<T, P extends Record<string, unknown>>(
    version: VERSIONS,
    path: string,
    params?: P,
  ): Promise<IResponse<T>> {
    try {
      const response = await fetch(
        `${this.API_URL}/${version}${path}?${this.queryParams(params as any)}`,
        { headers: { 'X-API-KEY': this.API_KEY } },
      );

      // Если статус HTTP-ответа не 200, выбрасывается ошибка
      if (!response.ok) {
        const error: IResponseError = await response.json();
        throw new Error(
          JSON.stringify({
            status: response.status,
            error: error.error,
            message: error.message,
          }),
        );
      }

      return {
        data: await response.json(),
        statusCode: response.status,
        error: null,
        message: null,
      };
    } catch (error) {
      const { status, message, error: err } = JSON.parse(error.message);
      console.log('There was an error with your request:', error);
      return {
        data: null,
        statusCode: status,
        error: err,
        message: message,
      };
    }
  }
}
