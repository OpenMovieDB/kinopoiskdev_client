export class ClientRequest {
  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string,
  ) {}

  async get<T, P>(path: string, params?: P): Promise<T> {
    const response = await fetch(`${this.API_URL}${path}`, {
      headers: {
        'X-API-KEY': this.API_KEY,
      },
    });
    return await response.json();
  }
}
