import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardCreatedEventObjectSchema,
  type LaborTimecardCreatedEventObject,
} from "./labor-timecard-created-event-object.js";

export type LaborTimecardCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `timecard`. */
  type?: string | null;
  /** The ID of the affected `Timecard`. */
  id?: string;
  object?: LaborTimecardCreatedEventObject;
};

export const laborTimecardCreatedEventDataSchema: Schema<LaborTimecardCreatedEventData> =
  s.object<LaborTimecardCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborTimecardCreatedEventObjectSchema)),
  });
