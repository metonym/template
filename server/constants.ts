/**
 * Bun automatically parses and injects environment variables from the .env file.
 * @see https://bun.sh/docs/runtime/env
 */

export const PORT = import.meta.env.PORT ?? 3000;
export const SITE_URL = import.meta.env.SITE_URL ?? "http://localhost:3000/";
export const NODE_ENV = import.meta.env.NODE_ENV;
