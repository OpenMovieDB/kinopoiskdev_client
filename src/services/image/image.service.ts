import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Image } from './image-response.interface';
import { ImageDto } from './image-filter.dto';
import { IQueryBuilder } from '@/core/builder/query-fields.interface';
import { DocsResponse } from '@/interfaces/response/response.interface';

export class ImageService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(filters: ImageDto | IQueryBuilder<ImageDto>) {
    return await this.request.get<typeof filters, DocsResponse<Image>>(
      VERSION.V1_4,
      `/image`,
      filters,
    );
  }
}
