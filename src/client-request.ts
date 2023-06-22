import { VERSIONS } from './enums/version.enum';
import { IResponseError } from './interfaces/error.interface';
import { IResponse } from './interfaces/response.interface';

export class ClientRequest {
  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string,
  ) {}

  async get<T, P extends Record<string, unknown>>(
    version: VERSIONS,
    path: string,
    params?: P,
  ): Promise<IResponse<T>> {
    try {
      const response = await fetch(
        `${this.API_URL}/${version}${path}?${new URLSearchParams(
          params as any,
        )}`,
        {
          headers: {
            'X-API-KEY': this.API_KEY,
          },
        },
      );

      // If the HTTP response status is not 200, throw an error
      if (!response.ok) {
        const error: IResponseError = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, error: ${error.error}, message: ${error.message}`,
        );
      }

      return {
        data: await response.json(),
        statusCode: response.status,
        error: null,
        message: null,
      };
    } catch (error) {
      console.error('There was an error with your request:', error);
      return {
        data: null,
        statusCode: error.status,
        error: error.error,
        message: error.message,
      };
    }
  }
}
