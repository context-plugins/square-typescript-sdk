import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundCreatedEventDataSchema, type RefundCreatedEventData } from "./refund-created-event-data.js";

/** Published when a [Refund](entity:PaymentRefund) is created. */
export type RefundCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"refund.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: RefundCreatedEventData;
};

export const refundCreatedEventSchema: Schema<RefundCreatedEvent> = s.object<RefundCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => refundCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
