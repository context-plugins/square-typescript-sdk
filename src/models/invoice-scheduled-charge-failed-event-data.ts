import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceScheduledChargeFailedEventObjectSchema,
  type InvoiceScheduledChargeFailedEventObject,
} from "./invoice-scheduled-charge-failed-event-object.js";

export type InvoiceScheduledChargeFailedEventData = {
  type?: string | null;
  id?: string;
  object?: InvoiceScheduledChargeFailedEventObject;
};

export const invoiceScheduledChargeFailedEventDataSchema: Schema<InvoiceScheduledChargeFailedEventData> =
  s.object<InvoiceScheduledChargeFailedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoiceScheduledChargeFailedEventObjectSchema)),
  });
