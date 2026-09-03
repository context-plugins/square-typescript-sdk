import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkUpdateCustomerDataSchema, type BulkUpdateCustomerData } from "./bulk-update-customer-data.js";

export type BulkUpdateCustomersRequest = {
  customers: Record<string, BulkUpdateCustomerData>;
};

export const bulkUpdateCustomersRequestSchema: Schema<BulkUpdateCustomersRequest> =
  s.object<BulkUpdateCustomersRequest>({
    customers: s.record(
      s.string(),
      s.lazy(() => bulkUpdateCustomerDataSchema),
    ),
  });
