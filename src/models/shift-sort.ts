import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSortFieldSchema, type ShiftSortField } from "./shift-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Sets the sort order of search results.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export type ShiftSort = {
  /**
   * Enumerates the `Shift` fields to sort on.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  field?: ShiftSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const shiftSortSchema: Schema<ShiftSort> = s.object<ShiftSort>({
  field: s.optional(s.lazy(() => shiftSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
