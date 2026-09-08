import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftFilterSchema, type ShiftFilter } from "./shift-filter.js";
import { shiftSortSchema, type ShiftSort } from "./shift-sort.js";

/**
 * The parameters of a `Shift` search query, which includes filter and sort options.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export type ShiftQuery = {
  /**
   * Defines a filter used in a search for `Shift` records. `AND` logic is used by Square's servers
   * to apply each filter property specified.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  filter?: ShiftFilter;
  /**
   * Sets the sort order of search results.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  sort?: ShiftSort;
};

export const shiftQuerySchema: Schema<ShiftQuery> = s.object<ShiftQuery>({
  filter: s.optional(s.lazy(() => shiftFilterSchema)),
  sort: s.optional(s.lazy(() => shiftSortSchema)),
});
