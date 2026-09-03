import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftFilterSchema, type ScheduledShiftFilter } from "./scheduled-shift-filter.js";
import { scheduledShiftSortSchema, type ScheduledShiftSort } from "./scheduled-shift-sort.js";

export type ScheduledShiftQuery = {
  filter?: ScheduledShiftFilter;
  sort?: ScheduledShiftSort;
};

export const scheduledShiftQuerySchema: Schema<ScheduledShiftQuery> = s.object<ScheduledShiftQuery>({
  filter: s.optional(s.lazy(() => scheduledShiftFilterSchema)),
  sort: s.optional(s.lazy(() => scheduledShiftSortSchema)),
});
