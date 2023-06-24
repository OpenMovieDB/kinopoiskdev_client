import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { ReviewDocsResponseDto } from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { ReviewFields } from '../types/review-fields.type';

export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<ReviewFields>,
  ): Promise<IResponse<ReviewDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/review`, filters);
  }
}
