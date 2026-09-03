import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceRecipientTaxIds = {
  euVat?: string;
};

export const invoiceRecipientTaxIdsSchema: Schema<InvoiceRecipientTaxIds> = s.object<InvoiceRecipientTaxIds>({
  euVat: s.optional(s.string()),
  _keysMap: {
    euVat: "eu_vat",
  },
});
