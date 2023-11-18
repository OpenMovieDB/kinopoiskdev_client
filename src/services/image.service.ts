import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { VERSION } from '../enums/version.enum';
import { IImageService } from '../interfaces/services/image-service.interface';
import { ImageRequestV1_4 } from '../interfaces/dto/image/image-request.dto';
import { ImageDocsResponseDtoV1_4 } from '../interfaces/dto/image/image-docs-response.dto';

export class ImageService implements IImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: ImageRequestV1_4 | Record<string, string>,
  ): Promise<IResponse<ImageDocsResponseDtoV1_4>> {
    return await this.request.get<ImageDocsResponseDtoV1_4, typeof filters>(
      VERSION.V1_4,
      `/image`,
      filters,
    );
  }
}
