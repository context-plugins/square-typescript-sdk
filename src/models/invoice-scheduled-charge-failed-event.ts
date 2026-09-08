import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceScheduledChargeFailedEventDataSchema,
  type InvoiceScheduledChargeFailedEventData,
} from "./invoice-scheduled-charge-failed-event-data.js";

/** Published when an automatic scheduled payment for an [Invoice](entity:Invoice) has failed. */
export type InvoiceScheduledChargeFailedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.scheduled_charge_failed"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
