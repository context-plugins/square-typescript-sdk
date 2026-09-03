import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftFilterStatusSchema, type ShiftFilterStatus } from "./shift-filter-status.js";
import { shiftWorkdaySchema, type ShiftWorkday } from "./shift-workday.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type ShiftFilter = {
  locationIds?: string[] | null;
  employeeIds?: string[] | null;
  status?: ShiftFilterStatus;
  start?: TimeRange;
  end?: TimeRange;
  workday?: ShiftWorkday;
  teamMemberIds?: string[] | null;
};

export const shiftFilterSchema: Schema<ShiftFilter> = s.object<ShiftFilter>({
  locationIds: s.optionalNullable(s.array(s.string())),
  employeeIds: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => shiftFilterStatusSchema)),
  start: s.optional(s.lazy(() => timeRangeSchema)),
  end: s.optional(s.lazy(() => timeRangeSchema)),
  workday: s.optional(s.lazy(() => shiftWorkdaySchema)),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    locationIds: "location_ids",
    employeeIds: "employee_ids",
    teamMemberIds: "team_member_ids",
  },
});
