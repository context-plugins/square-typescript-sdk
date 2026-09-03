import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimecardStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type TimecardStatus = (typeof TimecardStatus)[keyof typeof TimecardStatus] | (string & {});

export const timecardStatusSchema: EnumSchema<TimecardStatus> = s.enumOf<TimecardStatus>(TimecardStatus);
