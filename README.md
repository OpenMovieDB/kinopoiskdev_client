<p align="center">
  <a href="https://kinopoisk.dev/" target="blank"><img src="https://openmovieapi.dev/full-size-cover.png" alt="Open movie API logo" /></a>
</p>

# TS/JS клиент для kinopoisk.dev API (@openmoviedb/kinopoiskdev_client)

Эта библиотека позволяет взаимодействовать с [неофициальным API kinopoisk](kinopoisk.dev), обеспечивая удобный доступ к таким сущностям как:

- Фильмы (movie)
- Сезоны (season)
- Персоны (person)
- Ключевые слова (keyword)
- Студии (studio)
- Изображения (image)
- Отзывы (review)

## Начало работы

1. Получите токен у телеграм бота [@kinopoiskdev_bot](https://t.me/kinopoiskdev_bot).
2. Изучите [документацию](https://api.kinopoisk.dev/v1/documentation). Она выполнена в формате OpenAPI и поможет вам понять, какие данные можно получить и какие параметры можно передать в запросе.

## Установка

Установите библиотеку через npm:

```bash
npm i @openmoviedb/kinopoiskdev_client
```

или yarn:

```bash
yarn add @openmoviedb/kinopoiskdev_client
```

## Использование

Сначала инициализируйте клиент и передайте в него ваш токен:

```typescript
import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');
```

### Взаимодействие с сущностями

После инициализации клиента вы можете начать взаимодействовать с различными сущностями. Вот пример того, как можно получить информацию о фильме по его ID:

```typescript
const {data} = await kp.movie.getById(666);
console.log(data);
```

### Использование Query Builder

QueryBuilder это специальный инструмент, который помогает вам создавать сложные запросы без написания их вручную. QueryBuilder позволяет вам добавлять различные параметры в ваш запрос, такие как сортировка, фильтрация, пагинация и выбор конкретных полей для возвращения. Этот инструмент валидирует поля, которые вы передаете, и подсвечивает подсказки, что облегчает использование. 

Вот пример использования QueryBuilder для получения списка фильмов с определенными параметрами:

```typescript
import {
  KinopoiskDev,
  MovieQueryBuilder,
  SPECIAL_VALUE,
  SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

const getRelatedByQueryBuilderMovies = async () => {
  const queryBuilder = new MovieQueryBuilder();

  const query = queryBuilder
    .select(['id', 'name', 'rating', 'poster', 'year'])
    .filterRange('year', [2020, 2023])
    .filterRange('rating.kp', [7.5, 10])
    .filterExact('poster.url', SPECIAL_VALUE.NOT_NULL)
    .sort('rating.kp', SORT_TYPE.DESC)
    .paginate(1, 10)
    .build();

  const { data, error, message } = await kp.movie.search(query);

  console.log(data, error, message);
};

getRelatedByQueryBuilderMovies();
```

Обратите внимание, что QueryBuilder совместим с axios и другими HTTP клиентами. Если вам нужно использовать другой HTTP клиент, вы можете сделать это. Библиотека предоставляет все необходимые типы для этого.

Также вы можете взаимодействовать с API без использования QueryBuilder, просто составив запрос самостоятельно или в интерфейсе документации API. Пример:

```typescript
import { KinopoiskDev, Filter, MovieFields } from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

const getRelatedWithoutQueryBuilderMovies = async () => {
  const query: Filter<MovieFields> = {
    selectFields: ['id', 'name', 'rating', 'poster', 'year'],
    year: '2020-2023',
    'rating.kp': '7.5-10',
    'poster.url': '!null',
    sortField: 'rating.kp',
    sortType: '-1',
    page: 1,
    limit: 10,
  };

  const { data, error, message } = await kp.movie.getByFilters(query);

  console.log(data, error, message);
};

getRelatedWithoutQueryBuilderMovies();
```

### Подробные примеры
Для более детальных примеров использования библиотеки, пожалуйста, обратитесь к директории [examples](https://github.com/OpenMovieDB/kinopoiskdev_client/tree/main/examples) в репозитории проекта. Там вы найдете примеры работы с каждой из доступных сущностей.
