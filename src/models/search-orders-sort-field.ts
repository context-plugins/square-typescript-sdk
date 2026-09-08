import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies which timestamp to use to sort `SearchOrder` results. */
export const SearchOrdersSortField = {
  /**
   * The time when the order was created, in RFC-3339 format. If you are also filtering for a time
   * range in this query, you must set the `CREATED_AT` field in your `DateTimeFilter`.
   */
  CreatedAt: "CREATED_AT",
  /**
   * The time when the order last updated, in RFC-3339 format. If you are also filtering for a time
   * range in this query, you must set the `UPDATED_AT` field in your `DateTimeFilter`.
   */
  UpdatedAt: "UPDATED_AT",
  /**
   * The time when the order was closed, in RFC-3339 format. If you use this value, you must also
   * set a `StateFilter` with closed states. If you are also filtering for a time range in this
   * query, you must set the `CLOSED_AT` field in your `DateTimeFilter`.
   */
  ClosedAt: "CLOSED_AT",
} as const;
export type SearchOrdersSortField =
  | (typeof SearchOrdersSortField)[keyof typeof SearchOrdersSortField]
  | (string & {});

export const searchOrdersSortFieldSchema: EnumSchema<SearchOrdersSortField> =
  s.enumOf<SearchOrdersSortField>(SearchOrdersSortField);
