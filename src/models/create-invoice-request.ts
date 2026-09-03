import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type CreateInvoiceRequest = {
  invoice: Invoice;
  idempotencyKey?: string;
};

export const createInvoiceRequestSchema: Schema<CreateInvoiceRequest> = s.object<CreateInvoiceRequest>({
  invoice: invoiceSchema,
  idempotencyKey: s.optional(s.string()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
