import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type UpdateScheduledShiftRequest = {
  /**
   * Represents a specific time slot in a work schedule. This object is used to manage the lifecycle
   * of a scheduled shift from the draft to published state. A scheduled shift contains the latest
   * draft shift details and current published shift details.
   */
  scheduledShift: ScheduledShift;
};

export const updateScheduledShiftRequestSchema: Schema<UpdateScheduledShiftRequest> =
  s.object<UpdateScheduledShiftRequest>({
    scheduledShift: scheduledShiftSchema,
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
