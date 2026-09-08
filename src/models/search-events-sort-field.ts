import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the sort key for events returned from a search. */
export const SearchEventsSortField = {
  /**
   * Use the default sort key. The default behavior is to sort events by when they were created
   * (`created_at`).
   */
  Default: "DEFAULT",
} as const;
export type SearchEventsSortField =
  | (typeof SearchEventsSortField)[keyof typeof SearchEventsSortField]
  | (string & {});

export const searchEventsSortFieldSchema: EnumSchema<SearchEventsSortField> =
  s.enumOf<SearchEventsSortField>(SearchEventsSortField);
