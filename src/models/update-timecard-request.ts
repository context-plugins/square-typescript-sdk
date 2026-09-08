import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

/** A request to update a `Timecard` object. */
export type UpdateTimecardRequest = {
  /**
   * A record of the hourly rate, start time, and end time of a single timecard (shift) for a team
   * member. This might include a record of the start and end times of breaks taken during the
   * shift.
   */
  timecard: Timecard;
};

export const updateTimecardRequestSchema: Schema<UpdateTimecardRequest> = s.object<UpdateTimecardRequest>({
  timecard: timecardSchema,
});
