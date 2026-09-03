import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceFilter = {
  locationIds: string[];
  customerIds?: string[] | null;
};

export const invoiceFilterSchema: Schema<InvoiceFilter> = s.object<InvoiceFilter>({
  locationIds: s.array(s.string()),
  customerIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    locationIds: "location_ids",
    customerIds: "customer_ids",
  },
});
