import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkCreateCustomerDataSchema, type BulkCreateCustomerData } from "./bulk-create-customer-data.js";

export type BulkCreateCustomersRequest = {
  customers: Record<string, BulkCreateCustomerData>;
};

export const bulkCreateCustomersRequestSchema: Schema<BulkCreateCustomersRequest> =
  s.object<BulkCreateCustomersRequest>({
    customers: s.record(
      s.string(),
      s.lazy(() => bulkCreateCustomerDataSchema),
    ),
  });
