import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** **Read only** Enumerates the possible status of a [timecard](entity:Timecard). */
export const TimecardStatus = {
  /** The timecard has a `start_at` time but no `end_at` time, indicating an ongoing shift. */
  Open: "OPEN",
  /** The timecard has both `start_at` and `end_at` times, indicating a completed shift. */
  Closed: "CLOSED",
} as const;
export type TimecardStatus = (typeof TimecardStatus)[keyof typeof TimecardStatus] | (string & {});

export const timecardStatusSchema: EnumSchema<TimecardStatus> = s.enumOf<TimecardStatus>(TimecardStatus);
