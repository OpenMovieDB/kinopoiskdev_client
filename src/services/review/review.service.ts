import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Review } from './review-response.interface';
import { ReviewDto } from './review-filter.dto';
import { QueryBuilder } from '@/core/builder/query-builder';
export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: QueryBuilder<ReviewDto>,
  ): Promise<WrapperDocsResponseDto<Review>> {
    return await this.request.get<Review, typeof filters>(VERSION.V1_4, `/review`, filters);
  }
}
