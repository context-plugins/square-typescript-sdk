import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
export const SortOrder = {
  /** The results are returned in descending (e.g., newest-first or Z-A) order. */
  Desc: "DESC",
  /** The results are returned in ascending (e.g., oldest-first or A-Z) order. */
  Asc: "ASC",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder] | (string & {});

export const sortOrderSchema: EnumSchema<SortOrder> = s.enumOf<SortOrder>(SortOrder);
