import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceRefundedEventObjectSchema,
  type InvoiceRefundedEventObject,
} from "./invoice-refunded-event-object.js";

export type InvoiceRefundedEventData = {
  /** Name of the affected object’s type, `"invoice"`. */
  type?: string | null;
  /** ID of the affected invoice. */
  id?: string;
  object?: InvoiceRefundedEventObject;
};

export const invoiceRefundedEventDataSchema: Schema<InvoiceRefundedEventData> =
  s.object<InvoiceRefundedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoiceRefundedEventObjectSchema)),
  });
