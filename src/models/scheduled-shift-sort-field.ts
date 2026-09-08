import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines valid values for the `field` sort setting in a
 * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
 */
export const ScheduledShiftSortField = {
  /** Sort by the start time of the shift. */
  StartAt: "START_AT",
  /** Sort by the end time of the shift. */
  EndAt: "END_AT",
  /** Sort by the creation date of the shift. */
  CreatedAt: "CREATED_AT",
  /** Sort by the last updated date of the shift. */
  UpdatedAt: "UPDATED_AT",
} as const;
export type ScheduledShiftSortField =
  | (typeof ScheduledShiftSortField)[keyof typeof ScheduledShiftSortField]
  | (string & {});

export const scheduledShiftSortFieldSchema: EnumSchema<ScheduledShiftSortField> =
  s.enumOf<ScheduledShiftSortField>(ScheduledShiftSortField);
