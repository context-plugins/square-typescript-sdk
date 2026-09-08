import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceUpdatedEventDataSchema, type InvoiceUpdatedEventData } from "./invoice-updated-event-data.js";

/** Published when an [Invoice](entity:Invoice) is updated. */
export type InvoiceUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: InvoiceUpdatedEventData;
};

export const invoiceUpdatedEventSchema: Schema<InvoiceUpdatedEvent> = s.object<InvoiceUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => invoiceUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
