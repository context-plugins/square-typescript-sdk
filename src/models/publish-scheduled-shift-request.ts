import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  scheduledShiftNotificationAudienceSchema,
  type ScheduledShiftNotificationAudience,
} from "./scheduled-shift-notification-audience.js";

/** Represents a [PublishScheduledShift](api-endpoint:Labor-PublishScheduledShift) request. */
export type PublishScheduledShiftRequest = {
  /**
   * A unique identifier for the `PublishScheduledShift` request, used to ensure the
   * [idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * of the operation.
   */
  idempotencyKey: string;
  /**
   * The current version of the scheduled shift, used to enable [optimistic
   * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control. If the provided version doesn't match the server version, the request fails. If
   * omitted, Square executes a blind write, potentially overwriting data from another publish
   * request.
   */
  version?: number;
  /**
   * Indicates whether Square sends an email notification to team members when a scheduled shift is
   * published and which team members receive the notification.
   */
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
