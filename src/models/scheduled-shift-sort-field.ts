import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledShiftSortField = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type ScheduledShiftSortField =
  | (typeof ScheduledShiftSortField)[keyof typeof ScheduledShiftSortField]
  | (string & {});

export const scheduledShiftSortFieldSchema: EnumSchema<ScheduledShiftSortField> =
  s.enumOf<ScheduledShiftSortField>(ScheduledShiftSortField);
