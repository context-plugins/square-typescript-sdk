import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type LaborScheduledShiftCreatedEventObject = {
  scheduledShift?: ScheduledShift;
};

export const laborScheduledShiftCreatedEventObjectSchema: Schema<LaborScheduledShiftCreatedEventObject> =
  s.object<LaborScheduledShiftCreatedEventObject>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    _keysMap: {
      scheduledShift: "ScheduledShift",
    },
  });
