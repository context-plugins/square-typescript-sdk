import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchOrdersSortField = {
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
  ClosedAt: "CLOSED_AT",
} as const;
export type SearchOrdersSortField =
  | (typeof SearchOrdersSortField)[keyof typeof SearchOrdersSortField]
  | (string & {});

export const searchOrdersSortFieldSchema: EnumSchema<SearchOrdersSortField> =
  s.enumOf<SearchOrdersSortField>(SearchOrdersSortField);
