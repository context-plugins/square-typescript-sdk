import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type UpdateScheduledShiftRequest = {
  scheduledShift: ScheduledShift;
};

export const updateScheduledShiftRequestSchema: Schema<UpdateScheduledShiftRequest> =
  s.object<UpdateScheduledShiftRequest>({
    scheduledShift: scheduledShiftSchema,
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
