import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimecardFilterStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type TimecardFilterStatus =
  | (typeof TimecardFilterStatus)[keyof typeof TimecardFilterStatus]
  | (string & {});

export const timecardFilterStatusSchema: EnumSchema<TimecardFilterStatus> =
  s.enumOf<TimecardFilterStatus>(TimecardFilterStatus);
