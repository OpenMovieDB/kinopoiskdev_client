import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Studio } from './studio-response.interface';
import { StudioDto } from './studio-filter.dto';

export class StudioService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: StudioDto,
  ): Promise<WrapperDocsResponseDto<Studio>> {
    return await this.request.get<Studio, typeof filters>(VERSION.V1_4, `/studio`, filters);
  }
}
