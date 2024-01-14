import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Filter } from '@/core/builder/query-builder.interface';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { ReviewFields } from './review-fields.dto';
import { Review } from './review-response.dto';
export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<ReviewFields>,
  ): Promise<WrapperDocsResponseDto<Review>> {
    return await this.request.get<Review, typeof filters>(VERSION.V1_4, `/review`, filters);
  }
}
