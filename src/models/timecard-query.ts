import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardFilterSchema, type TimecardFilter } from "./timecard-filter.js";
import { timecardSortSchema, type TimecardSort } from "./timecard-sort.js";

export type TimecardQuery = {
  filter?: TimecardFilter;
  sort?: TimecardSort;
};

export const timecardQuerySchema: Schema<TimecardQuery> = s.object<TimecardQuery>({
  filter: s.optional(s.lazy(() => timecardFilterSchema)),
  sort: s.optional(s.lazy(() => timecardSortSchema)),
});
