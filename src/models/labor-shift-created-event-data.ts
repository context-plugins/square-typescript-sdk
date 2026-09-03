import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftCreatedEventObjectSchema,
  type LaborShiftCreatedEventObject,
} from "./labor-shift-created-event-object.js";

export type LaborShiftCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LaborShiftCreatedEventObject;
};

export const laborShiftCreatedEventDataSchema: Schema<LaborShiftCreatedEventData> =
  s.object<LaborShiftCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborShiftCreatedEventObjectSchema)),
  });
