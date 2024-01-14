import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { MeiliPersonEntity, Person, PersonAward, WrapperDocsResponseDto } from '../interfaces';
import { Filter, SearchFilter } from '../interfaces/query-builder.interface';
import { PersonFields } from '../interfaces/services/person/person-fields.type';

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
