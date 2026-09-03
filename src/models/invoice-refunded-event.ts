import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceRefundedEventDataSchema,
  type InvoiceRefundedEventData,
} from "./invoice-refunded-event-data.js";

export type InvoiceRefundedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: InvoiceRefundedEventData;
};

export const invoiceRefundedEventSchema: Schema<InvoiceRefundedEvent> = s.object<InvoiceRefundedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => invoiceRefundedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
