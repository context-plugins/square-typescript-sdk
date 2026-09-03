import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchVendorsRequestSortField = {
  Name: "NAME",
  CreatedAt: "CREATED_AT",
} as const;
export type SearchVendorsRequestSortField =
  | (typeof SearchVendorsRequestSortField)[keyof typeof SearchVendorsRequestSortField]
  | (string & {});

export const searchVendorsRequestSortFieldSchema: EnumSchema<SearchVendorsRequestSortField> =
  s.enumOf<SearchVendorsRequestSortField>(SearchVendorsRequestSortField);
