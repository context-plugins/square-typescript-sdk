import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMadeEventObjectSchema,
  type InvoicePaymentMadeEventObject,
} from "./invoice-payment-made-event-object.js";

export type InvoicePaymentMadeEventData = {
  type?: string | null;
  id?: string;
  object?: InvoicePaymentMadeEventObject;
};

export const invoicePaymentMadeEventDataSchema: Schema<InvoicePaymentMadeEventData> =
  s.object<InvoicePaymentMadeEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoicePaymentMadeEventObjectSchema)),
  });
