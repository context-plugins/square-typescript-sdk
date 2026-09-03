import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentCreatedEventDataSchema, type PaymentCreatedEventData } from "./payment-created-event-data.js";

export type PaymentCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
