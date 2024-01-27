import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Image } from './image-response.interface';
import { ImageDto } from './image-filter.dto';
import { QueryBuilder } from '@/core/builder/query-builder';

export class ImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: QueryBuilder<ImageDto>,
  ): Promise<WrapperDocsResponseDto<Image>> {
    return await this.request.get<Image>(
      VERSION.V1_4,
      `/image`,
      filters,
    );
  }
}
