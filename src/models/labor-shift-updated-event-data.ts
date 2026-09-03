import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftUpdatedEventObjectSchema,
  type LaborShiftUpdatedEventObject,
} from "./labor-shift-updated-event-object.js";

export type LaborShiftUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: LaborShiftUpdatedEventObject;
};

export const laborShiftUpdatedEventDataSchema: Schema<LaborShiftUpdatedEventData> =
  s.object<LaborShiftUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborShiftUpdatedEventObjectSchema)),
  });
