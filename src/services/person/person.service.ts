import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { DocsResponse } from '@/interfaces/response/response.interface';
import { PersonAwardsDto, PersonDto } from './person-filter.dto';
import { QueryBuilderFieldsPageLimit } from '@/core/builder/query-fields.interface';
import { QueryBuilder } from '@/core/builder/query-builder';
import { MeiliPersonEntity, Person, PersonAward } from '@/services';

export class PersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number) {
    return await this.request.get<unknown, Person>(
      VERSION.V1_4,
      `/person/${id}`,
    );
  }

  async getByFilters(filters: QueryBuilder<PersonDto>) {
    return await this.request.get<typeof filters, DocsResponse<Person>>(
      VERSION.V1_4,
      `/person`,
      filters,
    );
  }

  async getBySearchQuery(
    filters: QueryBuilder<
      QueryBuilderFieldsPageLimit<{
        query: string;
      }>
    >,
  ) {
    return await this.request.get<
      typeof filters,
      DocsResponse<MeiliPersonEntity>
    >(VERSION.V1_4, `/person/search`, filters);
  }

  async getAwardsByFilters(filters: QueryBuilder<PersonAwardsDto>) {
    return await this.request.get<typeof filters, DocsResponse<PersonAward>>(
      VERSION.V1_4,
      `/movie/awards`,
      filters,
    );
  }
}
