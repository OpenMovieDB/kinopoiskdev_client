import { Filter } from '@/core/builder/query-builder.interface';
import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { ImageFields } from './image-fields.dto';
import { Image } from './image-response.dto';

export class ImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<ImageFields>,
  ): Promise<WrapperDocsResponseDto<Image>> {
    return await this.request.get<Image, typeof filters>(
      VERSION.V1_4,
      `/image`,
      filters,
    );
  }
}
