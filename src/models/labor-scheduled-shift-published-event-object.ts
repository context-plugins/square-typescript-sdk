import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type LaborScheduledShiftPublishedEventObject = {
  scheduledShift?: ScheduledShift;
};

export const laborScheduledShiftPublishedEventObjectSchema: Schema<LaborScheduledShiftPublishedEventObject> =
  s.object<LaborScheduledShiftPublishedEventObject>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    _keysMap: {
      scheduledShift: "ScheduledShift",
    },
  });
