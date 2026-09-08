import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines valid values for the `scheduled_shift_statuses` filter in a
 * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
 */
export const ScheduledShiftFilterScheduledShiftStatus = {
  /**
   * The scheduled shift has never been published or its draft details were updated after it was
   * published. This means that the shift has no `published_shift_details` field or that
   * `draft_shift_details` has different settings than `published_shift_details`.
   */
  Draft: "DRAFT",
  /**
   * The scheduled shift was published. This means that the shift has a `published_shift_details`
   * field.
   */
  Published: "PUBLISHED",
} as const;
export type ScheduledShiftFilterScheduledShiftStatus =
  | (typeof ScheduledShiftFilterScheduledShiftStatus)[keyof typeof ScheduledShiftFilterScheduledShiftStatus]
  | (string & {});

export const scheduledShiftFilterScheduledShiftStatusSchema: EnumSchema<ScheduledShiftFilterScheduledShiftStatus> =
  s.enumOf<ScheduledShiftFilterScheduledShiftStatus>(ScheduledShiftFilterScheduledShiftStatus);
