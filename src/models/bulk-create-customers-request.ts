import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkCreateCustomerDataSchema, type BulkCreateCustomerData } from "./bulk-create-customer-data.js";

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkCreateCustomers](api-endpoint:Customers-BulkCreateCustomers) endpoint.
 */
export type BulkCreateCustomersRequest = {
  /**
   * A map of 1 to 100 individual create requests, represented by `idempotency key: { customer data
   * }` key-value pairs.
   *
   * Each key is an [idempotency
   * key](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) that
   * uniquely identifies the create request. Each value contains the customer data used to create
   * the customer profile.
   */
  customers: Record<string, BulkCreateCustomerData>;
};

export const bulkCreateCustomersRequestSchema: Schema<BulkCreateCustomersRequest> =
  s.object<BulkCreateCustomersRequest>({
    customers: s.record(
      s.string(),
      s.lazy(() => bulkCreateCustomerDataSchema),
    ),
  });
