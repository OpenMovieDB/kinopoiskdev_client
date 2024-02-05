import { beforeAll, describe, expect, test } from 'vitest';
import { KinopoiskDev } from '@/core/main';
import { Studio, StudioDto } from '@/services';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { SortType } from '@/interfaces/enums';

describe('StudioService E2E', () => {
  let kp: KinopoiskDev;

  beforeAll(() => {
    kp = new KinopoiskDev(import.meta.env.VITE_TOKEN);
  });

  const tests: {
    name: string;
    filter: StudioDto;
    expected: (response: WrapperDocsResponseDto<Studio>) => void;
  }[] = [
    {
      name: 'Получить студию по id 666',
      filter: {
        id: {
          $eq: '666',
        },
      },
      expected: response => {
        expect(response?.data?.docs[0].id).toEqual('666');
      },
    },
    {
      name: 'Получить студии с movie id 666',
      filter: {
        'movies.id': {
          $eq: 666,
        },
      },
      expected: response => {
        response?.data?.docs.forEach(doc => {
          const movie = doc.movies?.find(movie => movie.id === 666);
          expect(movie?.id).toEqual(666);
        });
      },
    },
    {
      name: 'Получить студию по названию 20th Century Fox',
      filter: {
        title: {
          $eq: '20th Century Fox',
        },
      },
      expected: response => {
        expect(response?.data?.docs[0].title).toEqual('20th Century Fox');
      },
    },
    {
      name: "Получить студии по subType 'company'",
      filter: {
        subType: {
          $eq: 'company',
        },
      },
      expected: response => {
        response?.data?.docs.forEach(doc => {
          expect(doc.subType).toEqual('company');
        });
      },
    },
    {
      name: 'Получить студии отсортированные по updatedAt с page 3 и limit 5',
      filter: {
        page: 3,
        limit: 5,
        sort: {
          updatedAt: SortType.ASC,
        },
      },
      expected: response => {
        const dates = response?.data?.docs.map(doc => doc.updatedAt);
        if (!dates) return;
        expect(dates).toEqual(dates.sort());
        expect(response?.data?.limit).toEqual(5);
        expect(response?.data?.page).toEqual(3);
      },
    },
  ];

  tests.forEach(({ name, filter, expected }) => {
    test(`StudioService.getByFilters: ${name}`, async () => {
      const response = await kp.studio.getByFilters(filter);
      expect(response.statusCode).toEqual(200);
      expect(response.data).toBeDefined();
      expected(response);
    });
  });
});
