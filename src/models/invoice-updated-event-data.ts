import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceUpdatedEventObjectSchema,
  type InvoiceUpdatedEventObject,
} from "./invoice-updated-event-object.js";

export type InvoiceUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: InvoiceUpdatedEventObject;
};

export const invoiceUpdatedEventDataSchema: Schema<InvoiceUpdatedEventData> =
  s.object<InvoiceUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoiceUpdatedEventObjectSchema)),
  });
