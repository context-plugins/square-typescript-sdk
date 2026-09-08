import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceDeletedEventDataSchema, type InvoiceDeletedEventData } from "./invoice-deleted-event-data.js";

/** Published when a draft [Invoice](entity:Invoice) is deleted. */
export type InvoiceDeletedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.deleted"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: InvoiceDeletedEventData;
};

export const invoiceDeletedEventSchema: Schema<InvoiceDeletedEvent> = s.object<InvoiceDeletedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => invoiceDeletedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
