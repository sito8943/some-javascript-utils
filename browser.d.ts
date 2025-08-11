// types/some-javascript-utils/Browser.d.ts
declare module "some-javascript-utils/Browser" {
  export function getCookie(name: string): string;
  export function createCookie(
    name: string,
    days: number,
    value: any,
    path?: string,
    sameSite?: "Lax" | "Strict" | "None"
  ): void;
  export function deleteCookie(name: string): void;

  export function getUserLanguage(cookie?: string): string;

  export function scrollTo(
    targetY?: number,
    targetX?: number,
    dealer?: Window | HTMLElement,
    behavior?: ScrollBehavior
  ): void;

  export function parseQueries(
    queries: string
  ): Record<string, string | undefined>;

  export function validation(
    key: string,
    storage?: "local" | "session",
    value?: any
  ): boolean;
}
