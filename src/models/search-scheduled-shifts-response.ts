import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type SearchScheduledShiftsResponse = {
  scheduledShifts?: ScheduledShift[];
  cursor?: string;
  errors?: Error[];
};

export const searchScheduledShiftsResponseSchema: Schema<SearchScheduledShiftsResponse> =
  s.object<SearchScheduledShiftsResponse>({
    scheduledShifts: s.optional(s.array(s.lazy(() => scheduledShiftSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShifts: "scheduled_shifts",
    },
  });
