import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Season } from './season-response.dto';
import { SeasonDto } from './season-filter.dto';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: SeasonDto,
  ): Promise<WrapperDocsResponseDto<Season>> {
    return await this.request.get<Season, typeof filters>(VERSION.V1_4, `/season`, filters);
  }
}
