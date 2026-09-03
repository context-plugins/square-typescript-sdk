import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftFilterSchema, type ShiftFilter } from "./shift-filter.js";
import { shiftSortSchema, type ShiftSort } from "./shift-sort.js";

export type ShiftQuery = {
  filter?: ShiftFilter;
  sort?: ShiftSort;
};

export const shiftQuerySchema: Schema<ShiftQuery> = s.object<ShiftQuery>({
  filter: s.optional(s.lazy(() => shiftFilterSchema)),
  sort: s.optional(s.lazy(() => shiftSortSchema)),
});
