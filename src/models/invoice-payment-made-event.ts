import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMadeEventDataSchema,
  type InvoicePaymentMadeEventData,
} from "./invoice-payment-made-event-data.js";

export type InvoicePaymentMadeEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: InvoicePaymentMadeEventData;
};

export const invoicePaymentMadeEventSchema: Schema<InvoicePaymentMadeEvent> =
  s.object<InvoicePaymentMadeEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => invoicePaymentMadeEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
