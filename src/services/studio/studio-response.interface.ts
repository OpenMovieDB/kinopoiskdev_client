
export enum TypeEnum {
  _0 = 'Производство',
  _1 = 'Спецэффекты',
  _2 = 'Прокат',
  _3 = 'Студия дубляжа',
}

/**
   *
   * @export
   * @interface MovieFromStudio
   */
export interface MovieFromStudio {
  /**
   *
   * @type {number}
   * @memberof MovieFromStudio
   */
  id?: number;
}

/**
   *
   * @export
   * @interface Studio
   */
 export interface Studio {
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  subType: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Studio
   */
  type?: TypeEnum;
  /**
   *
   * @type {MovieFromStudio}
   * @memberof Studio
   */
  movies?: MovieFromStudio;
}