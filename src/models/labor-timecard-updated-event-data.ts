import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardUpdatedEventObjectSchema,
  type LaborTimecardUpdatedEventObject,
} from "./labor-timecard-updated-event-object.js";

export type LaborTimecardUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: LaborTimecardUpdatedEventObject;
};

export const laborTimecardUpdatedEventDataSchema: Schema<LaborTimecardUpdatedEventData> =
  s.object<LaborTimecardUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => laborTimecardUpdatedEventObjectSchema)),
  });
