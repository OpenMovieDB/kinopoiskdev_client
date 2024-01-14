import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { Image, WrapperDocsResponseDto } from '../interfaces';
import { ImageRequestV1_4 } from '../interfaces/dto/image/image-request.dto';

export class ImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: ImageRequestV1_4 | Record<string, string>,
  ): Promise<WrapperDocsResponseDto<Image>> {
    return await this.request.get<Image, typeof filters>(
      VERSION.V1_4,
      `/image`,
      filters,
    );
  }
}
