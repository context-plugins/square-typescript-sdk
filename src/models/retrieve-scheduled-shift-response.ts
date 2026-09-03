import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type RetrieveScheduledShiftResponse = {
  scheduledShift?: ScheduledShift;
  errors?: Error[];
};

export const retrieveScheduledShiftResponseSchema: Schema<RetrieveScheduledShiftResponse> =
  s.object<RetrieveScheduledShiftResponse>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
