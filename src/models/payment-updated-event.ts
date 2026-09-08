import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentUpdatedEventDataSchema, type PaymentUpdatedEventData } from "./payment-updated-event-data.js";

/**
 * Published when a [Payment](entity:Payment) is updated. Typically the `payment.status`, or
 * `card_details.status` fields are updated as a payment is canceled, authorized, or completed.
 */
export type PaymentUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"payment.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: PaymentUpdatedEventData;
};

export const paymentUpdatedEventSchema: Schema<PaymentUpdatedEvent> = s.object<PaymentUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => paymentUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
