import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftFilterSchema, type ScheduledShiftFilter } from "./scheduled-shift-filter.js";
import { scheduledShiftSortSchema, type ScheduledShiftSort } from "./scheduled-shift-sort.js";

/**
 * Represents filter and sort criteria for the `query` field in a
 * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
 */
export type ScheduledShiftQuery = {
  /**
   * Defines filter criteria for a [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts)
   * request. Multiple filters in a query are combined as an `AND` operation.
   */
  filter?: ScheduledShiftFilter;
  /**
   * Defines sort criteria for a [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts)
   * request.
   */
  sort?: ScheduledShiftSort;
};

export const scheduledShiftQuerySchema: Schema<ScheduledShiftQuery> = s.object<ScheduledShiftQuery>({
  filter: s.optional(s.lazy(() => scheduledShiftFilterSchema)),
  sort: s.optional(s.lazy(() => scheduledShiftSortSchema)),
});
