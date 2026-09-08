import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftCreatedEventObjectSchema,
  type LaborShiftCreatedEventObject,
} from "./labor-shift-created-event-object.js";

export type LaborShiftCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `shift`. */
  type?: string | null;
  /** The ID of the affected `Shift`. */
  id?: string;
  object?: LaborShiftCreatedEventObject;
};

export const laborShiftCreatedEventDataSchema: Schema<LaborShiftCreatedEventData> =
  s.object<LaborShiftCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborShiftCreatedEventObjectSchema)),
  });
