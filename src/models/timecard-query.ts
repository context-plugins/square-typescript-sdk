import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardFilterSchema, type TimecardFilter } from "./timecard-filter.js";
import { timecardSortSchema, type TimecardSort } from "./timecard-sort.js";

/** The parameters of a `Timecard` search query, which includes filter and sort options. */
export type TimecardQuery = {
  /**
   * Defines a filter used in a search for `Timecard` records. `AND` logic is used by Square's
   * servers to apply each filter property specified.
   */
  filter?: TimecardFilter;
  /** Sets the sort order of search results. */
  sort?: TimecardSort;
};

export const timecardQuerySchema: Schema<TimecardQuery> = s.object<TimecardQuery>({
  filter: s.optional(s.lazy(() => timecardFilterSchema)),
  sort: s.optional(s.lazy(() => timecardSortSchema)),
});
