import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { MeiliPersonEntity, Person, PersonAward } from './person-response.interface';
import { PersonAwardsDto, PersonDto } from './person-filter.dto';
import { QueryBuilderFieldsPageLimit } from '@/core/builder/query-fields.interface';
import { QueryBuilder } from '@/core/builder/query-builder';

export class PersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<WrapperDocsResponseDto<Person>> {
    return await this.request.get<Person>(VERSION.V1_4, `/person/${id}`);
  }

  async getByFilters(
    filters: QueryBuilder<PersonDto>,
  ): Promise<WrapperDocsResponseDto<Person>> {
    return await this.request.get<Person>(VERSION.V1_4, `/person`, filters);
  }

  async getBySearchQuery(
    filters: QueryBuilder<QueryBuilderFieldsPageLimit<{
      query: string;
    }>>,
  ): Promise<WrapperDocsResponseDto<MeiliPersonEntity>> {
    return await this.request.get<MeiliPersonEntity>(VERSION.V1_4, `/person/search`, filters);
  }

  async getAwardsByFilters(
    filters: QueryBuilder<PersonAwardsDto>
  ): Promise<WrapperDocsResponseDto<PersonAward>> {
    return await this.request.get<PersonAward>(VERSION.V1_4, `/movie/awards`, filters);
  }
}
