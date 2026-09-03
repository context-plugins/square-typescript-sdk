import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { timecardSortFieldSchema, type TimecardSortField } from "./timecard-sort-field.js";

export type TimecardSort = {
  field?: TimecardSortField;
  order?: SortOrder;
};

export const timecardSortSchema: Schema<TimecardSort> = s.object<TimecardSort>({
  field: s.optional(s.lazy(() => timecardSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
