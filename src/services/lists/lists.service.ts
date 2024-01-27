import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { ListsDto } from './lists-filter.dto';
import { Lists } from './lists-response.interface';
import { QueryBuilder } from '@/core/builder/query-builder';

export class ListsService {
  constructor(private readonly request: ClientRequest) {}

  async getBySlug(slug: string): Promise<WrapperDocsResponseDto<Lists>> {
    return await this.request.get<Lists>(VERSION.V1_4, `/list/${slug}`);
  }

  async getByFilters(
    filters: QueryBuilder<ListsDto>,
  ): Promise<WrapperDocsResponseDto<Lists>> {
    return await this.request.get<Lists, typeof filters>(VERSION.V1_4, `/list`, filters);
  }
}
