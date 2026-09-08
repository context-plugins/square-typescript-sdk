import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundUpdatedEventDataSchema, type RefundUpdatedEventData } from "./refund-updated-event-data.js";

/**
 * Published when a [Refund](entity:PaymentRefund) is updated. Typically the `refund.status` changes
 * when a refund is completed.
 */
export type RefundUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"refund.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: RefundUpdatedEventData;
};

export const refundUpdatedEventSchema: Schema<RefundUpdatedEvent> = s.object<RefundUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => refundUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
