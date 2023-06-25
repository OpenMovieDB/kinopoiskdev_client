<p align="center">
  <a href="https://kinopoisk.dev/" target="blank"><img src="https://openmovieapi.dev/full-size-cover.png" alt="Open movie API logo" /></a>
</p>

# TS/JS клиент для kinopoisk.dev API

Это библиотека для [неофициального API kinopoisk](kinopoisk.dev). 
## Действия перед началом работы
1. Получите токен на в телеграм боте [@kinopoiskdev_bot](https://t.me/kinopoiskdev_bot)
2. Изучите [документацию](https://kinopoisk.dev/documentation). Она оформлена в формате OpenAPI и поможет вам понять, какие данные можно получить и какие параметры можно передать в запросе.

## Установка
Установите библиотеку с помощью npm:
```bash
npm i @openmoviedb/kinopoiskdev_ts_client
```
или yarn:
```bash
yarn add @openmoviedb/kinopoiskdev_ts_client
```

## Использование
Обьявите клиент и передайте в него токен:
```typescript
import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_ts_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');
```

### Определитесь с сущностью и методом. Вот пример для получения фильма по ID:
```typescript
import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_ts_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

const {data} = await kp.movie.getMovieById(666);
console.log(data);
```

Больше примеров доступно в папке [examples](https://github.com/OpenMovieDB/kinopoiskdev_ts_client/tree/main/examples)