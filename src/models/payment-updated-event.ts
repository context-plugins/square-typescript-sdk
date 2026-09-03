import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentUpdatedEventDataSchema, type PaymentUpdatedEventData } from "./payment-updated-event-data.js";

export type PaymentUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
