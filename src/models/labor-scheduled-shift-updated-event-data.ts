import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftUpdatedEventObjectSchema,
  type LaborScheduledShiftUpdatedEventObject,
} from "./labor-scheduled-shift-updated-event-object.js";

export type LaborScheduledShiftUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `scheduled_shift`. */
  type?: string | null;
  /** The ID of the affected `ScheduledShift`. */
  id?: string;
  object?: LaborScheduledShiftUpdatedEventObject;
};

export const laborScheduledShiftUpdatedEventDataSchema: Schema<LaborScheduledShiftUpdatedEventData> =
  s.object<LaborScheduledShiftUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborScheduledShiftUpdatedEventObjectSchema)),
  });
