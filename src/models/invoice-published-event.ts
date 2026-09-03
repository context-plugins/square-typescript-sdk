import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePublishedEventDataSchema,
  type InvoicePublishedEventData,
} from "./invoice-published-event-data.js";

export type InvoicePublishedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
