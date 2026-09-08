import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkPublishScheduledShiftsDataSchema,
  type BulkPublishScheduledShiftsData,
} from "./bulk-publish-scheduled-shifts-data.js";
import {
  scheduledShiftNotificationAudienceSchema,
  type ScheduledShiftNotificationAudience,
} from "./scheduled-shift-notification-audience.js";

/**
 * Represents a [BulkPublishScheduledShifts](api-endpoint:Labor-BulkPublishScheduledShifts) request.
 */
export type BulkPublishScheduledShiftsRequest = {
  /**
   * A map of 1 to 100 key-value pairs that represent individual publish requests.
   *
   * - Each key is the ID of a scheduled shift you want to publish.
   * - Each value is a `BulkPublishScheduledShiftsData` object that contains the `version` field or
   *   is an empty object.
   */
  scheduledShifts: Record<string, BulkPublishScheduledShiftsData>;
  /**
   * Indicates whether Square sends an email notification to team members when a scheduled shift is
   * published and which team members receive the notification.
   */
  scheduledShiftNotificationAudience?: ScheduledShiftNotificationAudience;
};

export const bulkPublishScheduledShiftsRequestSchema: Schema<BulkPublishScheduledShiftsRequest> =
  s.object<BulkPublishScheduledShiftsRequest>({
    scheduledShifts: s.record(
      s.string(),
      s.lazy(() => bulkPublishScheduledShiftsDataSchema),
    ),
    scheduledShiftNotificationAudience: s.optional(s.lazy(() => scheduledShiftNotificationAudienceSchema)),
    _keysMap: {
      scheduledShifts: "scheduled_shifts",
      scheduledShiftNotificationAudience: "scheduled_shift_notification_audience",
    },
  });
