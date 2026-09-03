import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftCreatedEventObjectSchema,
  type LaborScheduledShiftCreatedEventObject,
} from "./labor-scheduled-shift-created-event-object.js";

export type LaborScheduledShiftCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LaborScheduledShiftCreatedEventObject;
};

export const laborScheduledShiftCreatedEventDataSchema: Schema<LaborScheduledShiftCreatedEventData> =
  s.object<LaborScheduledShiftCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborScheduledShiftCreatedEventObjectSchema)),
  });
