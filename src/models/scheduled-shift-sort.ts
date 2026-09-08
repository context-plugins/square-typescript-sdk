import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSortFieldSchema, type ScheduledShiftSortField } from "./scheduled-shift-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Defines sort criteria for a [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts)
 * request.
 */
export type ScheduledShiftSort = {
  /**
   * Defines valid values for the `field` sort setting in a
   * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
   */
  field?: ScheduledShiftSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const scheduledShiftSortSchema: Schema<ScheduledShiftSort> = s.object<ScheduledShiftSort>({
  field: s.optional(s.lazy(() => scheduledShiftSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
