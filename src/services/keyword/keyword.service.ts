import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Keyword } from './keyword-response.interface';
import { KeywordDto } from './keyword-filter.dto';
export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: KeywordDto,
  ): Promise<WrapperDocsResponseDto<Keyword>> {
    return await this.request.get<Keyword, typeof filters>(VERSION.V1_4, `/keyword`, filters);
  }
}
