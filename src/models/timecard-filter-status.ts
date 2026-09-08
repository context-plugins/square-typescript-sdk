import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the `status` of `Timecard` records to be returned. */
export const TimecardFilterStatus = {
  /** Timecards that have been started and not ended. */
  Open: "OPEN",
  /** Timecards that have been started and ended. */
  Closed: "CLOSED",
} as const;
export type TimecardFilterStatus =
  | (typeof TimecardFilterStatus)[keyof typeof TimecardFilterStatus]
  | (string & {});

export const timecardFilterStatusSchema: EnumSchema<TimecardFilterStatus> =
  s.enumOf<TimecardFilterStatus>(TimecardFilterStatus);
