import { KinopoiskDev } from '../index';
import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { ImageDocsResponseDto } from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';

export class ImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Record<string, string>,
  ): Promise<IResponse<ImageDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/image`, filters);
  }
}
