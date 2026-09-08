import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentMadeEventObjectSchema,
  type InvoicePaymentMadeEventObject,
} from "./invoice-payment-made-event-object.js";

export type InvoicePaymentMadeEventData = {
  /** Name of the affected object’s type, `"invoice"`. */
  type?: string | null;
  /** ID of the affected invoice. */
  id?: string;
  object?: InvoicePaymentMadeEventObject;
};

export const invoicePaymentMadeEventDataSchema: Schema<InvoicePaymentMadeEventData> =
  s.object<InvoicePaymentMadeEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoicePaymentMadeEventObjectSchema)),
  });
