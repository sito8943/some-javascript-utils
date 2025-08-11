declare module "some-javascript-utils" {
  /** =================
   *  Array utilities
   *  ================= */
  export namespace Array {
    /**
     * Sorts an array by a given attribute or a custom function.
     * @param array Array of objects to sort
     * @param attribute Property name to sort by (default: "id")
     * @param asc Whether to sort ascending (default: false)
     * @param auxFunction Optional function to extract a sortable value from each item
     */
    function sortBy<T>(
      array: T[],
      attribute?: keyof T & string,
      asc?: boolean,
      auxFunction?: ((item: T) => any) | null
    ): T[];
  }

  /** =================
   *  Browser utilities
   *  ================= */
  export namespace Browser {
    function getCookie(name: string): string;
    function createCookie(
      name: string,
      days: number,
      value: any,
      path?: string,
      sameSite?: "Lax" | "Strict" | "None"
    ): void;
    function deleteCookie(name: string): void;
    function getUserLanguage(cookie?: string): string;
    function scrollTo(
      targetY?: number,
      targetX?: number,
      dealer?: Window | HTMLElement,
      behavior?: ScrollBehavior
    ): void;
    function parseQueries(queries: string): Record<string, string | undefined>;
    function validation(
      key: string,
      storage?: "local" | "session",
      value?: any
    ): boolean;
  }

  /** =================
   *  Other utilities
   *  ================= */
  /**
   * Converts a string into a slug format (lowercase, hyphens, no accents).
   * @param string String to convert
   */
  export function toSlug(string: string): string;
}
