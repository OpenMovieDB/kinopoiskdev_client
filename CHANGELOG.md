# Changelog

## [1.3.10](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.9...v1.3.10) (2023-07-22)


### Bug Fixes

* update build ([a217822](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/a217822d6688a9c131d4ce1124e5466544881dd9))

## [1.3.9](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.8...v1.3.9) (2023-07-22)


### Bug Fixes

* **query.builder:** incorrect field types are used ([ee31ef1](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ee31ef1a0a8d1dfa86b6c4de6a81903a268c91df))

## [1.3.8](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.7...v1.3.8) (2023-07-04)


### Bug Fixes

* update package description to be more concise and accurate ([1988367](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/19883673211d599e7aaa1209d4d510a09d5c99cf))

## [1.3.7](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.6...v1.3.7) (2023-06-26)


### Bug Fixes

* invalid url in getPossibleValuesByField ([6b35da3](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/6b35da32ef22cac401f3c5b60229dd22d611fa05))
* search methods do not use pagination ([b989bd9](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/b989bd98f06126f0b0a26813fb8921c42e030b1d))

## [1.3.6](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.5...v1.3.6) (2023-06-25)


### Bug Fixes

* bundle is too big ([0196cfc](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/0196cfcd0fdcc944cdf2be12d59839949297af3a))

## [1.3.5](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.4...v1.3.5) (2023-06-25)


### Bug Fixes

* remove unused files on npm ([423b034](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/423b03472fd51be00547231827a17d81e35c60f1))
* update version ([dd73df5](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/dd73df5cb1485fc870e58ed29d8855f17cba390e))

## [1.3.4](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.3...v1.3.4) (2023-06-25)


### Bug Fixes

* commonjs causing conflicts ([5e41b02](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/5e41b02e8247e5c5c22cc4a5441162d860863ffa))

## [1.3.3](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.2...v1.3.3) (2023-06-25)


### Bug Fixes

* commonjs causing conflicts ([96e740a](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/96e740ac8fc9b88d68be38c9a1fb7f5522d84e63))

## [1.3.2](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.1...v1.3.2) (2023-06-25)


### Bug Fixes

* commonjs causing conflicts ([18f9f90](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/18f9f90bc49fb6dbde9c480b5c9d2345b583088a))

## [1.3.1](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.3.0...v1.3.1) (2023-06-25)


### Bug Fixes

* commonjs causing conflicts ([ad24128](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ad24128aa04d39153f8db31d7fca93fc265c30d7))

## [1.3.0](https://github.com/OpenMovieDB/kinopoiskdev_client/compare/v1.2.0...v1.3.0) (2023-06-25)


### Features

* add .idea and package.json files to the project ([8bdcb07](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/8bdcb07af5a5f874e1deb2caa274a9800ac37e93))
* add default export class KinopoiskDev to index.ts ([16f9572](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/16f95726aa48b647353a06eb04666d04fab10303))
* add release-please configuration file and package to enable automatic releases ([c1a381e](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/c1a381e8fb9fb17af9348a0f68ae2228518a1f2a))
* **api.interface.ts:** add new file for API interfaces ([01f7b7f](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/01f7b7f80c18c810c2946159f95441d898de7c54))
* **client-request.ts:** add ClientRequest class to handle API requests ([2d5feda](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/2d5fedaa56c4b6c3fa6de80ebb7c067d6cdd3018))
* **client-request.ts:** add error handling to get method and create IResponseError interface ([b91c057](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/b91c0570d4d2ba8fb7ef468c9ce05115d4e4cc05))
* **client-request.ts:** add IResponse interface to handle response data and status code ([031c604](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/031c604fb707b11ad94bc0162e4b6b0e0272c82f))
* **client-request.ts:** add queryParams method to handle query parameters in GET requests ([d43b8e2](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/d43b8e22c003b774e6e4a55dd950679ac7ce5ccf))
* **client-request.ts:** add version parameter to get method and use URLSearchParams for query parameters ([ebf90df](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ebf90df31c0df603681a9c45944974db90168c4a))
* **client-request:** add error handling for failed requests in get method ([7879f4b](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/7879f4bd1ca02240c7601aeea50220d424a25c94))
* **client-request:** add support for query parameters in get method ([7879f4b](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/7879f4bd1ca02240c7601aeea50220d424a25c94))
* **enums/version.enum.ts:** add VERSIONS enum ([ebf90df](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ebf90df31c0df603681a9c45944974db90168c4a))
* **examples:** add example package.json and movie.ts script with usage of kinopoiskdev_ts_client API ([91ad1c1](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/91ad1c1c5edc26ca60b050a1654bc42ee939bd95))
* **flattern.helper.ts:** add flattenHelper function to flatten nested objects into a single level object ([610faab](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/610faaba6b659ccabe1184a6f0adbb052403369b))
* **flattern.helper.ts:** add flattern helper function ([e29188d](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/e29188dcfe31175f2e97144479e857981f133710))
* **image-fields.type.ts:** add ImageFields type to represent image query fields ([dcc54c9](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/dcc54c93720945507b1a501e58afe1d95460f084))
* **image.service.ts:** add getByFilters method to ImageService class ([d45c97e](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/d45c97efc83bc5c2636a92aa8db2ea388481605b))
* **image.service.ts:** add ImageService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **image.ts:** add Image class with constructor that takes KinopoiskDev client as parameter ([78a77fc](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/78a77fca39b4f88eafe94ddc3a66242d5f1e6ccd))
* **index.ts:** add MovieQueryBuilder and SORT_TYPE enum to support building queries for movie service ([92a9726](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/92a9726d639d3212b21f69d587d624432679ec76))
* **index.ts:** implement IKinopoiskDev interface in KinopoiskDev class ([0458aa3](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/0458aa3424a117caa8b498d8f8acc7a3f633bb00))
* **keyword.service.ts:** add getByFilters method to KeywordService class ([7efb0b7](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/7efb0b749fb2cd0081adf6534518f29550d9a2c7))
* **keyword.service.ts:** add KeywordService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **kinopoiskdev.interface.ts:** create IKinopoiskDev interface with all services and request property ([0458aa3](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/0458aa3424a117caa8b498d8f8acc7a3f633bb00))
* **movie-fields.type.ts:** add MovieFields type that extends IQueryFields interface. MovieFields type contains fields that can be used in queries for movies. ([654ce40](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/654ce408d462a98acad4edb77729c9b9f665c68a))
* **movie.service.ts:** add Filter and MovieFields types to getByFilters method parameters ([1654ad7](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/1654ad79e8efc6a3099207d4df863b6509eaa1fb))
* **movie.service.ts:** add methods to get movies by filters, search query, awards by filters, and possible values by field. Also add methods to get movie by id and random movie. ([5a766c9](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/5a766c9c2018173c9c21aaa4cc2b135dd5b487ac))
* **movie.service.ts:** add MovieService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **package.json:** add dev script to run rollup in watch mode and nodemon on bundle.esm.js ([028cdcf](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/028cdcf99f09b1c94a685ee7f4cf6cde38cd724e))
* **package.json:** add Jest as a dev dependency and configure it in the Jest object ([a8bd939](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/a8bd9390b782fc77d4164bce569079ea6371c43a))
* **pagination.interface.ts:** add IPagination interface to define pagination properties ([ac5ce8e](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ac5ce8e54c7345a25078344e4f6bb4a3585e7b16))
* **pagination.ts:** add Pagination class to handle pagination ([ac5ce8e](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ac5ce8e54c7345a25078344e4f6bb4a3585e7b16))
* **pagination.ts:** remove IPagination parameter from constructor and add page and limit parameters ([fbe183e](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/fbe183e52a17999147fe4a6a028e993699216599))
* **person-fields.type.ts:** add more fields to PersonFields type definition ([534d88a](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/534d88ac88d9c176f082907e205cecb90618d0a5))
* **person-fields.type.ts:** add PersonFields type definition for querying person data with specific fields ([cfce824](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/cfce82446cebedeaddbe1e87a95340b704bcff2e))
* **person.service.ts:** add methods to get person by id, filters, and search query, and awards by filters and pagination params ([7e91c25](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/7e91c25f29457a147271e5d885b2b61179265c53))
* **person.service.ts:** add PersonService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **query-params.ts:** add queryParams helper function to convert object to URLSearchParams string ([da0492c](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/da0492c60adb94d2f1d33a7729508c83629121cd))
* **query.builder.ts, query-builder.interface.ts:** add support for filtering by exact value and add Filter type definition ([76942d2](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/76942d2e37bd1e1cbb94f14fdce179de6ea00bdd))
* **query.builder.ts:** add ReviewQueryBuilder, SeasonQueryBuilder, StudioQueryBuilder, and ImageQueryBuilder classes to support new entities. ([fd91149](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/fd91149f780a38de14a4cf05e167e62a6aa32823))
* **query.builder.ts:** allow multiple values for a single field in query builder ([3ecd495](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/3ecd495f0f32b432c6c0d427135ad80e11f9837e))
* **release-please.yml:** add release-please workflow to automate versioning and releases ([6588588](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/658858825ae47d10fcde32adf655752a4a87264d))
* **release:** add .release-please-manifest.json file with initial version 1.0.0 ([0415c2f](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/0415c2f67492f70d4e4e412e5238aeb7b7389521))
* **release:** add release-please configuration files ([4b25545](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4b25545407b5a15033f4f60014109c300c9b2488))
* reset version ([117fea6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/117fea6fb8fbc3f5ab42e516caee18f0cb159c97))
* **review-fields.type.ts:** add BooleanFields type property to ReviewFields interface ([dea32b6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/dea32b67e555f17979e86efb8a17edbda270e28f))
* **review-fields.type.ts:** add ReviewFields type definition for query fields in reviews endpoint ([2a6f222](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/2a6f222a9d56c11e831efd381b54a8a816908b7d))
* **review.service.ts:** add getByFilters method to ReviewService class ([28c6ab0](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/28c6ab01d371d20ddc4e68a7fed1aa313a67661e))
* **review.service.ts:** add ReviewService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **season-fields.type.ts:** add SeasonFields type to query episodes by fields ([c8f092a](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/c8f092a7ee5c820cf7b066e50ba747db5ebd54bf))
* **season.service.ts:** add getByFilters method to SeasonService class ([e62528a](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/e62528acd9b3a54c933232d6e763fca3455e2cfe))
* **season.service.ts:** add SeasonService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **sort-type.enum.ts:** add SORT_TYPE enum for sorting in ascending and descending order ([afff261](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/afff261742b9539ade5cd30a4f4c2dde69dfc707))
* **special-value.enum.ts:** add NOT_NULL special value ([1f1685b](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/1f1685b99eba1e297d4a8824dd9768d1db543a49))
* **special-value.ts:** add NOT_NULL special value constant to be used in the application ([5838a73](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/5838a73bfe988621d17f8482c89331cf065e2f1c))
* **special-value.ts:** add special value constant file. ([2d5feda](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/2d5fedaa56c4b6c3fa6de80ebb7c067d6cdd3018))
* **studio-fields.type.ts:** add StudioFields type definition for GraphQL queries ([34d8bc9](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/34d8bc98c6dcbf30977c5ee07f2ee55597fac5ad))
* **studio.service.ts:** add methods to get studio by id and by filters ([b8e9d12](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/b8e9d123b7ff1bb5170f66b32e94f5dfc637a24e))
* **studio.service.ts:** add StudioService class ([4a15cd6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a15cd6ef9eb2d8f256437832c039245a71a33a4))
* **tsconfig.json:** add esModuleInterop to true to allow for interop between CommonJS and ES6 modules ([a8bd939](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/a8bd9390b782fc77d4164bce569079ea6371c43a))
* **types:** add KeywordFields type to represent fields for keyword search ([de8346a](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/de8346ac594ebcf1a3dfaa2cade368d1fd3564cd))
* **types:** add never type to DateFields and BooleanFields in all types ([b39e7d6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/b39e7d6f68987064d35ba3359e3ed71b4de410a0))
* update release policy ([36ce2e6](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/36ce2e65ddf198dd6f9af4edb897e4936aa270da))
* **versions.ts:** add SPECIAL_VALUE constant for not null values ([42d248d](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/42d248d4930facca786bf4087c53d7a610f2fa6f))


### Bug Fixes

* **README.md:** fix typo in package name in installation instructions ([88770fd](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/88770fd643ace36589db02e6d3ddd21fe15b6016))
* select does not allow the use of objects ([ad81a7b](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/ad81a7bb6a7996419c4409ae785f3c15a407d674))
* types are not displayed after the build ([4a4ac36](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/4a4ac366c4f573c4cacdf9d5220ea8b08d1e640e))
* types are not displayed after the build ([157cfed](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/157cfedcbf238204a202a8afc6c0b785e6c9d681))
* update LICENSE file to correct project name ([81bfdd5](https://github.com/OpenMovieDB/kinopoiskdev_client/commit/81bfdd5c7a36f8dcc5afe8405c267097121d39a4))
