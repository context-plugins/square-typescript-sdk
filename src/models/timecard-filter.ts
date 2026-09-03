import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";
import { timecardFilterStatusSchema, type TimecardFilterStatus } from "./timecard-filter-status.js";
import { timecardWorkdaySchema, type TimecardWorkday } from "./timecard-workday.js";

export type TimecardFilter = {
  locationIds?: string[] | null;
  status?: TimecardFilterStatus;
  start?: TimeRange;
  end?: TimeRange;
  workday?: TimecardWorkday;
  teamMemberIds?: string[] | null;
};

export const timecardFilterSchema: Schema<TimecardFilter> = s.object<TimecardFilter>({
  locationIds: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => timecardFilterStatusSchema)),
  start: s.optional(s.lazy(() => timeRangeSchema)),
  end: s.optional(s.lazy(() => timeRangeSchema)),
  workday: s.optional(s.lazy(() => timecardWorkdaySchema)),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    locationIds: "location_ids",
    teamMemberIds: "team_member_ids",
  },
});
