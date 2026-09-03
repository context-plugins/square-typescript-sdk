import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchEventsSortField = {
  Default: "DEFAULT",
} as const;
export type SearchEventsSortField =
  | (typeof SearchEventsSortField)[keyof typeof SearchEventsSortField]
  | (string & {});

export const searchEventsSortFieldSchema: EnumSchema<SearchEventsSortField> =
  s.enumOf<SearchEventsSortField>(SearchEventsSortField);
