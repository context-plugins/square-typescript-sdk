import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentCreatedEventDataSchema, type PaymentCreatedEventData } from "./payment-created-event-data.js";

/** Published when a [Payment](entity:Payment) is created. */
export type PaymentCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"payment.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: PaymentCreatedEventData;
};

export const paymentCreatedEventSchema: Schema<PaymentCreatedEvent> = s.object<PaymentCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => paymentCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
