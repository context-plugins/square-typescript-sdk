import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumerates the `Timecard` fields to sort on. */
export const TimecardSortField = {
  /** The start date/time of a `Timecard` */
  StartAt: "START_AT",
  /** The end date/time of a `Timecard` */
  EndAt: "END_AT",
  /** The date/time that a `Timecard` is created */
  CreatedAt: "CREATED_AT",
  /** The most recent date/time that a `Timecard` is updated */
  UpdatedAt: "UPDATED_AT",
} as const;
export type TimecardSortField = (typeof TimecardSortField)[keyof typeof TimecardSortField] | (string & {});

export const timecardSortFieldSchema: EnumSchema<TimecardSortField> =
  s.enumOf<TimecardSortField>(TimecardSortField);
