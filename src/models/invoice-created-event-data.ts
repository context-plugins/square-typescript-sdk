import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceCreatedEventObjectSchema,
  type InvoiceCreatedEventObject,
} from "./invoice-created-event-object.js";

export type InvoiceCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: InvoiceCreatedEventObject;
};

export const invoiceCreatedEventDataSchema: Schema<InvoiceCreatedEventData> =
  s.object<InvoiceCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoiceCreatedEventObjectSchema)),
  });
