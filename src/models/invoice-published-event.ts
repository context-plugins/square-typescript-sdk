import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePublishedEventDataSchema,
  type InvoicePublishedEventData,
} from "./invoice-published-event-data.js";

/** Published when an [Invoice](entity:Invoice) transitions from a draft to a non-draft status. */
export type InvoicePublishedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"invoice.published"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: InvoicePublishedEventData;
};

export const invoicePublishedEventSchema: Schema<InvoicePublishedEvent> = s.object<InvoicePublishedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => invoicePublishedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
