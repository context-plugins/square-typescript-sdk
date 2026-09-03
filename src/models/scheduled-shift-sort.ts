import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSortFieldSchema, type ScheduledShiftSortField } from "./scheduled-shift-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type ScheduledShiftSort = {
  field?: ScheduledShiftSortField;
  order?: SortOrder;
};

export const scheduledShiftSortSchema: Schema<ScheduledShiftSort> = s.object<ScheduledShiftSort>({
  field: s.optional(s.lazy(() => scheduledShiftSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
