import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { Keyword, KeywordFields, WrapperDocsResponseDto } from '../interfaces';
import { Filter } from '../interfaces/query-builder.interface';

export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<KeywordFields>,
  ): Promise<WrapperDocsResponseDto<Keyword>> {
    return await this.request.get<Keyword, typeof filters>(VERSION.V1_4, `/keyword`, filters);
  }
}
