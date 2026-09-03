import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type LaborTimecardCreatedEventObject = {
  timecard?: Timecard;
};

export const laborTimecardCreatedEventObjectSchema: Schema<LaborTimecardCreatedEventObject> =
  s.object<LaborTimecardCreatedEventObject>({
    timecard: s.optional(s.lazy(() => timecardSchema)),
  });
