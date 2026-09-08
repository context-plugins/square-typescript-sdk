import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether Square sends an email notification to team members when a scheduled shift is
 * published and which team members receive the notification.
 */
export const ScheduledShiftNotificationAudience = {
  /**
   * Notify all active team members. Note that republishing an unchanged shift with this setting
   * resends the notification.
   */
  All: "ALL",
  /**
   * Notify the team member assigned to the shift. If the shift assignment changes, notify both the
   * newly assigned and previously assigned team members.
   */
  Affected: "AFFECTED",
  /** Do not send a notification. */
  None: "NONE",
} as const;
export type ScheduledShiftNotificationAudience =
  | (typeof ScheduledShiftNotificationAudience)[keyof typeof ScheduledShiftNotificationAudience]
  | (string & {});

export const scheduledShiftNotificationAudienceSchema: EnumSchema<ScheduledShiftNotificationAudience> =
  s.enumOf<ScheduledShiftNotificationAudience>(ScheduledShiftNotificationAudience);
