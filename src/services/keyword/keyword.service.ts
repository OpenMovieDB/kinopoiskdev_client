import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import {
  DocsResponse,
  WrapperDocsResponseDto,
} from '@/interfaces/response/response.interface';
import { Keyword } from './keyword-response.interface';
import { KeywordDto } from './keyword-filter.dto';
import { IQueryBuilder } from '@/core/builder/query-fields.interface';

export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: KeywordDto | IQueryBuilder<KeywordDto>,
  ): Promise<WrapperDocsResponseDto<Keyword>> {
    return await this.request.get<typeof filters, DocsResponse<Keyword>>(
      VERSION.V1_4,
      `/keyword`,
      filters,
    );
  }
}
