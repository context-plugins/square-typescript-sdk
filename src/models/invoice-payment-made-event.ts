import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMadeEventDataSchema,
  type InvoicePaymentMadeEventData,
} from "./invoice-payment-made-event-data.js";

/**
 * Published when a payment that is associated with an [invoice](entity:Invoice) is completed. For
 * more information about invoice payments, see [Pay an
 * invoice](https://developer.squareup.com/docs/invoices-api/pay-refund-invoices#pay-invoice).
 */
export type InvoicePaymentMadeEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.payment_made"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
