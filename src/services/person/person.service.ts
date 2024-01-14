import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Filter, SearchFilter } from '@/core/builder/query-builder.interface';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { MeiliPersonEntity, Person, PersonAward } from './person-response.dto';
import { PersonFields } from './person-fields.dto';

export class PersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<WrapperDocsResponseDto<Person>> {
    return await this.request.get<Person>(VERSION.V1_4, `/person/${id}`);
  }

  async getByFilters(
    filters: Filter<PersonFields>,
  ): Promise<WrapperDocsResponseDto<Person>> {
    return await this.request.get<Person, typeof filters>(VERSION.V1_4, `/person`, filters);
  }

  async getBySearchQuery(
    filters: SearchFilter,
  ): Promise<WrapperDocsResponseDto<MeiliPersonEntity>> {
    return await this.request.get<MeiliPersonEntity, typeof filters>(VERSION.V1_4, `/person/search`, filters);
  }

  async getAwardsByFilters(
    filters: Record<string, string>
  ): Promise<WrapperDocsResponseDto<PersonAward>> {
    return await this.request.get<PersonAward, typeof filters>(VERSION.V1_4, `/movie/awards`, filters);
  }
}
