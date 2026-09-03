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

export type BulkPublishScheduledShiftsRequest = {
  scheduledShifts: Record<string, BulkPublishScheduledShiftsData>;
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
