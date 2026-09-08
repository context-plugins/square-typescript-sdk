import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type LaborTimecardCreatedEventObject = {
  /**
   * A record of the hourly rate, start time, and end time of a single timecard (shift) for a team
   * member. This might include a record of the start and end times of breaks taken during the
   * shift.
   */
  timecard?: Timecard;
};

export const laborTimecardCreatedEventObjectSchema: Schema<LaborTimecardCreatedEventObject> =
  s.object<LaborTimecardCreatedEventObject>({
    timecard: s.optional(s.lazy(() => timecardSchema)),
  });
