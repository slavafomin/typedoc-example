
export interface ParamsBag <ParamsType> {

  /**
   * Custom parameters.
   */
  params: ParamsType;

  /**
   * The description of the "qux" property.
   */
  qux: boolean;

}

export interface MyFuncParams {

  /**
   * The description of the "foo" property.
   */
  foo: string;

  /**
   * The description of the "bar" property.
   */
  bar: number;

}

export type MyFuncOptions = ParamsBag<MyFuncParams>;


export function myFunc(options: MyFuncOptions): void {
}
