import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkRetrieveCustomers](api-endpoint:Customers-BulkRetrieveCustomers) endpoint.
 */
export type BulkRetrieveCustomersRequest = {
  /** The IDs of the [customer profiles](entity:Customer) to retrieve. */
  customerIds: string[];
};

export const bulkRetrieveCustomersRequestSchema: Schema<BulkRetrieveCustomersRequest> =
  s.object<BulkRetrieveCustomersRequest>({
    customerIds: s.array(s.string()),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
