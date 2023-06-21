import { VERSIONS } from './enums/version.enum';

export class ClientRequest {
  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string,
  ) {}

  async get<T, P>(version: VERSIONS, path: string, params?: P): Promise<T> {
    const response = await fetch(
      `${this.API_URL}/${version}${path}?${new URLSearchParams(params || {})}`,
      {
        headers: {
          'X-API-KEY': this.API_KEY,
        },
      },
    );
    return await response.json();
  }
}
