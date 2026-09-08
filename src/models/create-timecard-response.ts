import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { timecardSchema, type Timecard } from "./timecard.js";

/**
 * The response to a request to create a `Timecard`. The response contains the created `Timecard`
 * object and might contain a set of `Error` objects if the request resulted in errors.
 */
export type CreateTimecardResponse = {
  /**
   * A record of the hourly rate, start time, and end time of a single timecard (shift) for a team
   * member. This might include a record of the start and end times of breaks taken during the
   * shift.
   */
  timecard?: Timecard;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const createTimecardResponseSchema: Schema<CreateTimecardResponse> = s.object<CreateTimecardResponse>({
  timecard: s.optional(s.lazy(() => timecardSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
