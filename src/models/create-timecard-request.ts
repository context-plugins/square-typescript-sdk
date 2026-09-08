import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

/** Represents a request to create a `Timecard`. */
export type CreateTimecardRequest = {
  /** A unique string value to ensure the idempotency of the operation. */
  idempotencyKey?: string;
  /**
   * A record of the hourly rate, start time, and end time of a single timecard (shift) for a team
   * member. This might include a record of the start and end times of breaks taken during the
   * shift.
   */
  timecard: Timecard;
};

export const createTimecardRequestSchema: Schema<CreateTimecardRequest> = s.object<CreateTimecardRequest>({
  idempotencyKey: s.optional(s.string()),
  timecard: timecardSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
