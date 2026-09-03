import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type CreateScheduledShiftResponse = {
  scheduledShift?: ScheduledShift;
  errors?: Error[];
};

export const createScheduledShiftResponseSchema: Schema<CreateScheduledShiftResponse> =
  s.object<CreateScheduledShiftResponse>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
