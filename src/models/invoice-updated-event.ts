import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceUpdatedEventDataSchema, type InvoiceUpdatedEventData } from "./invoice-updated-event-data.js";

export type InvoiceUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
