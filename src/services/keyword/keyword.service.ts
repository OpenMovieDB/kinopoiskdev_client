import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Keyword } from './keyword-response.interface';
import { KeywordDto } from './keyword-filter.dto';
import { QueryBuilder } from '@/core/builder/query-builder';
export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: QueryBuilder<KeywordDto>,
  ): Promise<WrapperDocsResponseDto<Keyword>> {
    return await this.request.get<Keyword>(VERSION.V1_4, `/keyword`, filters);
  }
}
