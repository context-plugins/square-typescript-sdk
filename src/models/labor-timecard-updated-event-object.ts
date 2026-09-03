import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type LaborTimecardUpdatedEventObject = {
  timecard?: Timecard;
};

export const laborTimecardUpdatedEventObjectSchema: Schema<LaborTimecardUpdatedEventObject> =
  s.object<LaborTimecardUpdatedEventObject>({
    timecard: s.optional(s.lazy(() => timecardSchema)),
  });
