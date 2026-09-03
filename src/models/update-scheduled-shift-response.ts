import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type UpdateScheduledShiftResponse = {
  scheduledShift?: ScheduledShift;
  errors?: Error[];
};

export const updateScheduledShiftResponseSchema: Schema<UpdateScheduledShiftResponse> =
  s.object<UpdateScheduledShiftResponse>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
