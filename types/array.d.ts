// types/some-javascript-utils/array.d.ts
declare module "some-javascript-utils/array" {
  export function sortBy<T extends Record<string, any>>(
    array: T[],
    attribute?: keyof T & string,
    asc?: boolean,
    auxFunction?: ((item: T) => any) | null
  ): T[];
}
