import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  scheduledShiftNotificationAudienceSchema,
  type ScheduledShiftNotificationAudience,
} from "./scheduled-shift-notification-audience.js";

export type PublishScheduledShiftRequest = {
  idempotencyKey: string;
  version?: number;
  scheduledShiftNotificationAudience?: ScheduledShiftNotificationAudience;
};

export const publishScheduledShiftRequestSchema: Schema<PublishScheduledShiftRequest> =
  s.object<PublishScheduledShiftRequest>({
    idempotencyKey: s.string(),
    version: s.optional(s.number()),
    scheduledShiftNotificationAudience: s.optional(s.lazy(() => scheduledShiftNotificationAudienceSchema)),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      scheduledShiftNotificationAudience: "scheduled_shift_notification_audience",
    },
  });
