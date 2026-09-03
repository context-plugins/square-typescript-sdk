import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceCanceledEventObjectSchema,
  type InvoiceCanceledEventObject,
} from "./invoice-canceled-event-object.js";

export type InvoiceCanceledEventData = {
  type?: string | null;
  id?: string;
  object?: InvoiceCanceledEventObject;
};

export const invoiceCanceledEventDataSchema: Schema<InvoiceCanceledEventData> =
  s.object<InvoiceCanceledEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => invoiceCanceledEventObjectSchema)),
  });
