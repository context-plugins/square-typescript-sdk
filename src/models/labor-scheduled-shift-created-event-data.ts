import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftCreatedEventObjectSchema,
  type LaborScheduledShiftCreatedEventObject,
} from "./labor-scheduled-shift-created-event-object.js";

export type LaborScheduledShiftCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `scheduled_shift`. */
  type?: string | null;
  /** The ID of the affected `ScheduledShift`. */
  id?: string;
  object?: LaborScheduledShiftCreatedEventObject;
};

export const laborScheduledShiftCreatedEventDataSchema: Schema<LaborScheduledShiftCreatedEventData> =
  s.object<LaborScheduledShiftCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborScheduledShiftCreatedEventObjectSchema)),
  });
