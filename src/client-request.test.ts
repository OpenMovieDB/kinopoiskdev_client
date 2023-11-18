import { ClientRequest } from './client-request';
import { VERSION } from './enums/version.enum';
import { KinopoiskDev,} from './kinopoiskdev';
import { ImageTypeV1_4, WithQueryStrategyV1_4 } from './interfaces/dto/image/image-request.dto';
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

const Exclude = <T>(value: T) => `!${value}` as unknown as WithQueryStrategyV1_4<T>;

describe('ClientRequest', () => {
  let clientRequest: ClientRequest;

  beforeEach(() => {
    clientRequest = new ClientRequest('test_key', 'https://test_url.com');
    fetchMock.resetMocks();
  });

  describe('get', () => {
    it('should return data when request is successful', async () => {
      const testResponse = { data: 'test_data' };
      fetchMock.mockResponseOnce(JSON.stringify(testResponse), { status: 200 });

      const response = await clientRequest.get(VERSION.V1, '/test_path');

      expect(fetchMock).toHaveBeenCalledWith(
        'https://test_url.com/v1/test_path?',
        { headers: { 'X-API-KEY': 'test_key' } },
      );
      expect(response.data).toEqual(testResponse);
    });

    it('should return error message when request fails', async () => {
      const testError = { error: 'test_error', message: 'test_message' };
      fetchMock.mockResponseOnce(JSON.stringify(testError), { status: 500 });

      const response = await clientRequest.get(VERSION.V1, '/test_path');

      expect(fetchMock).toHaveBeenCalledWith(
        'https://test_url.com/v1/test_path?',
        { headers: { 'X-API-KEY': 'test_key' } },
      );
      expect(response.statusCode).toEqual(500);
      expect(response.error).toEqual(testError.error);
      expect(response.message).toEqual(testError.message);
    });

    it('should handle query parameters correctly', async () => {
      const testResponse = { data: 'test_data' };
      fetchMock.mockResponseOnce(JSON.stringify(testResponse), { status: 200 });

      const queryParams = {
        id: 666,
        year: [2020, 2023],
        rating: '7.5-10',
        'poster.url': '!null',
      };

      const response = await clientRequest.get(
        VERSION.V1,
        '/test_path',
        queryParams,
      );

      expect(fetchMock).toHaveBeenCalledWith(
        'https://test_url.com/v1/test_path?id=666&year=2020&year=2023&rating=7.5-10&poster.url=%21null',
        { headers: { 'X-API-KEY': 'test_key' } },
      );
      expect(response.data).toEqual(testResponse);

      const client = new KinopoiskDev('test_key');

      client.image.getByFilters({
        page: 1,
        type: [ImageTypeV1_4.cover, Exclude(ImageTypeV1_4.cover)],
      });
    });
  });
});
