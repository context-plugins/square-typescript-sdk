import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceScheduledChargeFailedEventDataSchema,
  type InvoiceScheduledChargeFailedEventData,
} from "./invoice-scheduled-charge-failed-event-data.js";

export type InvoiceScheduledChargeFailedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: InvoiceScheduledChargeFailedEventData;
};

export const invoiceScheduledChargeFailedEventSchema: Schema<InvoiceScheduledChargeFailedEvent> =
  s.object<InvoiceScheduledChargeFailedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => invoiceScheduledChargeFailedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
