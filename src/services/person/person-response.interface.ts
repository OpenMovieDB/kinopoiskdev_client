/**
 *
 * @export
 * @interface BirthPlace
 */
export interface BirthPlace {
  /**
   *
   * @type {string}
   * @memberof BirthPlace
   */
  value?: string;
}

/**
 *
 * @export
 * @interface DeathPlace
 */
export interface DeathPlace {
  /**
   *
   * @type {string}
   * @memberof DeathPlace
   */
  value?: string;
}

/**
 *
 * @export
 * @interface Profession
 */
export interface Profession {
  /**
   *
   * @type {string}
   * @memberof Profession
   */
  value?: string;
}

/**
 *
 * @export
 * @interface FactInPerson
 */
export interface FactInPerson {
  /**
   *
   * @type {string}
   * @memberof FactInPerson
   */
  value?: string;
}

/**
 *
 * @export
 * @interface NominationAward
 */
export interface NominationAward {
  /**
   *
   * @type {string}
   * @memberof NominationAward
   */
  title: string;
  /**
   *
   * @type {number}
   * @memberof NominationAward
   */
  year: number;
}

/**
 *
 * @export
 * @interface Nomination
 */
export interface Nomination {
  /**
   *
   * @type {NominationAward}
   * @memberof Nomination
   */
  award: NominationAward;
  /**
   *
   * @type {string}
   * @memberof Nomination
   */
  title: string;
}

/**
 *
 * @export
 * @interface MovieInPerson
 */
export interface MovieInPerson {
  /**
   *
   * @type {number}
   * @memberof MovieInPerson
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  alternativeName?: string;
  /**
   *
   * @type {number}
   * @memberof MovieInPerson
   */
  rating?: number;
  /**
   *
   * @type {boolean}
   * @memberof MovieInPerson
   */
  general?: boolean;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof MovieInPerson
   */
  enProfession?: string;
}

/**
 *
 * @export
 * @interface MeiliPersonEntity
 */
export interface MeiliPersonEntity {
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  enName: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  photo: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  sex: string;
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  growth: number;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  birthday: string;
  /**
   *
   * @type {string}
   * @memberof MeiliPersonEntity
   */
  death: string;
  /**
   *
   * @type {number}
   * @memberof MeiliPersonEntity
   */
  age: number;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  birthPlace: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  deathPlace: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MeiliPersonEntity
   */
  profession: Array<string>;
}

/**
 *
 * @export
 * @interface Spouses
 */
export interface Spouses {
  /**
   *
   * @type {number}
   * @memberof Spouses
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  name?: string;
  /**
   *
   * @type {boolean}
   * @memberof Spouses
   */
  divorced?: boolean;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  divorcedReason?: string;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  sex?: string;
  /**
   *
   * @type {number}
   * @memberof Spouses
   */
  children?: number;
  /**
   *
   * @type {string}
   * @memberof Spouses
   */
  relation?: string;
}

/**
 *
 * @export
 * @interface Movie
 */
export interface Movie {
  /**
   *
   * @type {number}
   * @memberof Movie
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Movie
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Movie
   */
  rating: number;
}

/**
 *
 * @export
 * @interface PersonAward
 */
export interface PersonAward {
  /**
   *
   * @type {Nomination}
   * @memberof PersonAward
   */
  nomination: Nomination;
  /**
   *
   * @type {boolean}
   * @memberof PersonAward
   */
  winning: boolean;
  /**
   *
   * @type {number}
   * @memberof PersonAward
   */
  personId: number;
  /**
   *
   * @type {Movie}
   * @memberof PersonAward
   */
  movie: Movie;
}

/**
 *
 * @export
 * @interface Person
 */
export interface Person {
  /**
   *
   * @type {number}
   * @memberof Person
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  enName?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  photo?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  sex?: string;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  growth?: number;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  birthday?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  death?: string;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  age?: number;
  /**
   *
   * @type {Array<BirthPlace>}
   * @memberof Person
   */
  birthPlace?: Array<BirthPlace>;
  /**
   *
   * @type {Array<DeathPlace>}
   * @memberof Person
   */
  deathPlace?: Array<DeathPlace>;
  /**
   *
   * @type {Spouses}
   * @memberof Person
   */
  spouses?: Spouses;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  countAwards?: number;
  /**
   *
   * @type {Array<Profession>}
   * @memberof Person
   */
  profession?: Array<Profession>;
  /**
   *
   * @type {Array<FactInPerson>}
   * @memberof Person
   */
  facts?: Array<FactInPerson>;
  /**
   *
   * @type {Array<MovieInPerson>}
   * @memberof Person
   */
  movies?: Array<MovieInPerson>;
}