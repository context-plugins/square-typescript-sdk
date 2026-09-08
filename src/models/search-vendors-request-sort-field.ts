import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The field to sort the returned [Vendor](entity:Vendor) objects by. */
export const SearchVendorsRequestSortField = {
  /** To sort the result by the name of the [Vendor](entity:Vendor) objects. */
  Name: "NAME",
  /** To sort the result by the creation time of the [Vendor](entity:Vendor) objects. */
  CreatedAt: "CREATED_AT",
} as const;
export type SearchVendorsRequestSortField =
  | (typeof SearchVendorsRequestSortField)[keyof typeof SearchVendorsRequestSortField]
  | (string & {});

export const searchVendorsRequestSortFieldSchema: EnumSchema<SearchVendorsRequestSortField> =
  s.enumOf<SearchVendorsRequestSortField>(SearchVendorsRequestSortField);
