import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimecardSortField = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type TimecardSortField = (typeof TimecardSortField)[keyof typeof TimecardSortField] | (string & {});

export const timecardSortFieldSchema: EnumSchema<TimecardSortField> =
  s.enumOf<TimecardSortField>(TimecardSortField);
