import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceCanceledEventDataSchema,
  type InvoiceCanceledEventData,
} from "./invoice-canceled-event-data.js";

export type InvoiceCanceledEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: InvoiceCanceledEventData;
};

export const invoiceCanceledEventSchema: Schema<InvoiceCanceledEvent> = s.object<InvoiceCanceledEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => invoiceCanceledEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
