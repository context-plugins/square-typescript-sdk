import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { timecardSortFieldSchema, type TimecardSortField } from "./timecard-sort-field.js";

/** Sets the sort order of search results. */
export type TimecardSort = {
  /** Enumerates the `Timecard` fields to sort on. */
  field?: TimecardSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const timecardSortSchema: Schema<TimecardSort> = s.object<TimecardSort>({
  field: s.optional(s.lazy(() => timecardSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
