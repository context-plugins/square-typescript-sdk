import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledShiftFilterScheduledShiftStatus = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type ScheduledShiftFilterScheduledShiftStatus =
  | (typeof ScheduledShiftFilterScheduledShiftStatus)[keyof typeof ScheduledShiftFilterScheduledShiftStatus]
  | (string & {});

export const scheduledShiftFilterScheduledShiftStatusSchema: EnumSchema<ScheduledShiftFilterScheduledShiftStatus> =
  s.enumOf<ScheduledShiftFilterScheduledShiftStatus>(ScheduledShiftFilterScheduledShiftStatus);
