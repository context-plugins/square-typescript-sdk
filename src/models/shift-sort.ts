import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSortFieldSchema, type ShiftSortField } from "./shift-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type ShiftSort = {
  field?: ShiftSortField;
  order?: SortOrder;
};

export const shiftSortSchema: Schema<ShiftSort> = s.object<ShiftSort>({
  field: s.optional(s.lazy(() => shiftSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
