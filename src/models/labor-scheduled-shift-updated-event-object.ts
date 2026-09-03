import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type LaborScheduledShiftUpdatedEventObject = {
  scheduledShift?: ScheduledShift;
};

export const laborScheduledShiftUpdatedEventObjectSchema: Schema<LaborScheduledShiftUpdatedEventObject> =
  s.object<LaborScheduledShiftUpdatedEventObject>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    _keysMap: {
      scheduledShift: "ScheduledShift",
    },
  });
