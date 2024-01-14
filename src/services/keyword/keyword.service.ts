import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Filter } from '@/core/builder/query-builder.interface';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { KeywordFields } from './keyword-fields.dto';
import { Keyword } from './keyword-response.dto';
export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<KeywordFields>,
  ): Promise<WrapperDocsResponseDto<Keyword>> {
    return await this.request.get<Keyword, typeof filters>(VERSION.V1_4, `/keyword`, filters);
  }
}
