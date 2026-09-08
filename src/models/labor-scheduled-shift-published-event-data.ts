import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftPublishedEventObjectSchema,
  type LaborScheduledShiftPublishedEventObject,
} from "./labor-scheduled-shift-published-event-object.js";

export type LaborScheduledShiftPublishedEventData = {
  /** The type of object affected by the event. For this event, the value is `scheduled_shift`. */
  type?: string | null;
  /** The ID of the affected `ScheduledShift`. */
  id?: string;
  object?: LaborScheduledShiftPublishedEventObject;
};

export const laborScheduledShiftPublishedEventDataSchema: Schema<LaborScheduledShiftPublishedEventData> =
  s.object<LaborScheduledShiftPublishedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborScheduledShiftPublishedEventObjectSchema)),
  });
