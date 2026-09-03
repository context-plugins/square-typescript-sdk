import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type UpdateInvoiceRequest = {
  invoice: Invoice;
  idempotencyKey?: string | null;
  fieldsToClear?: string[] | null;
};

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = s.object<UpdateInvoiceRequest>({
  invoice: invoiceSchema,
  idempotencyKey: s.optionalNullable(s.string()),
  fieldsToClear: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    fieldsToClear: "fields_to_clear",
  },
});
