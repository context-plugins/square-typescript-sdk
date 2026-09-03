import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePublishedEventObjectSchema,
  type InvoicePublishedEventObject,
} from "./invoice-published-event-object.js";

export type InvoicePublishedEventData = {
  type?: string | null;
  id?: string;
  object?: InvoicePublishedEventObject;
};

export const invoicePublishedEventDataSchema: Schema<InvoicePublishedEventData> =
  s.object<InvoicePublishedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoicePublishedEventObjectSchema)),
  });
