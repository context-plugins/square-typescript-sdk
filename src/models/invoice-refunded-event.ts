import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceRefundedEventDataSchema,
  type InvoiceRefundedEventData,
} from "./invoice-refunded-event-data.js";

/**
 * Published when a refund is applied toward a payment of an [invoice](entity:Invoice). For more
 * information about invoice refunds, see [Refund an
 * invoice](https://developer.squareup.com/docs/invoices-api/pay-refund-invoices#refund-invoice).
 */
export type InvoiceRefundedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.refunded"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
