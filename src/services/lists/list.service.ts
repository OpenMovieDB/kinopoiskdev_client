import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { QueryBuilderFieldsPageLimit } from '@/core/builder/query-fields.interface';
import { ListDto } from './lists-filter.dto';
import { List } from './lists-response.dto';

export class ListService {
  constructor(private readonly request: ClientRequest) {}

  async getBySlug(slug: string): Promise<WrapperDocsResponseDto<List>> {
    return await this.request.get<List>(VERSION.V1_4, `/list/${slug}`);
  }

  async getByFilters(
    filters: ListDto,
  ): Promise<WrapperDocsResponseDto<List>> {
    return await this.request.get<List, typeof filters>(VERSION.V1_4, `/list`, filters);
  }
}
