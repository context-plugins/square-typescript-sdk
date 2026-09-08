import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkDeleteCustomers](api-endpoint:Customers-BulkDeleteCustomers) endpoint.
 */
export type BulkDeleteCustomersRequest = {
  /** The IDs of the [customer profiles](entity:Customer) to delete. */
  customerIds: string[];
};

export const bulkDeleteCustomersRequestSchema: Schema<BulkDeleteCustomersRequest> =
  s.object<BulkDeleteCustomersRequest>({
    customerIds: s.array(s.string()),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
