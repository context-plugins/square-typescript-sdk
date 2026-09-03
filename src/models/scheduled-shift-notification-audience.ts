import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledShiftNotificationAudience = {
  All: "ALL",
  Affected: "AFFECTED",
  None: "NONE",
} as const;
export type ScheduledShiftNotificationAudience =
  | (typeof ScheduledShiftNotificationAudience)[keyof typeof ScheduledShiftNotificationAudience]
  | (string & {});

export const scheduledShiftNotificationAudienceSchema: EnumSchema<ScheduledShiftNotificationAudience> =
  s.enumOf<ScheduledShiftNotificationAudience>(ScheduledShiftNotificationAudience);
