import { KinopoiskDev } from '../index';
import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { ImageDocsResponseDto } from '../interfaces/api.interface';
import { VERSION } from '../enums/version.enum';
import { IImageService } from '../interfaces/services/image-service.interface';

export class ImageService implements IImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Record<string, string>,
  ): Promise<IResponse<ImageDocsResponseDto>> {
    return await this.request.get(VERSION.V1, `/image`, filters);
  }
}
