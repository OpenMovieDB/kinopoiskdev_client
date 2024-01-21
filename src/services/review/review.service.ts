import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Review } from './review-response.dto';
import { ReviewDto } from './review-filter.dto';
export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: ReviewDto,
  ): Promise<WrapperDocsResponseDto<Review>> {
    return await this.request.get<Review, typeof filters>(VERSION.V1_4, `/review`, filters);
  }
}
