import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { DocsResponse } from '@/interfaces/response/response.interface';
import { ListsDto } from './lists-filter.dto';
import { Lists } from './lists-response.interface';
import { IQueryBuilder } from '@/core/builder/query-fields.interface';

export class ListsService {
  constructor(private readonly request: ClientRequest) {}

  async getBySlug(slug: string) {
    return await this.request.get<unknown, Lists>(
      VERSION.V1_4,
      `/list/${slug}`,
    );
  }

  async getByFilters(filters: ListsDto | IQueryBuilder<ListsDto>) {
    return await this.request.get<typeof filters, DocsResponse<Lists>>(
      VERSION.V1_4,
      `/list`,
      filters,
    );
  }
}
