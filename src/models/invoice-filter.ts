import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes query filters to apply. */
export type InvoiceFilter = {
  /**
   * Limits the search to the specified locations. A location is required. In the current
   * implementation, only one location can be specified.
   */
  locationIds: string[];
  /**
   * Limits the search to the specified customers, within the specified locations. Specifying a
   * customer is optional. In the current implementation, a maximum of one customer can be
   * specified.
   */
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
