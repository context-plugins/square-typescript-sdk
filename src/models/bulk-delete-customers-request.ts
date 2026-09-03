import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkDeleteCustomersRequest = {
  customerIds: string[];
};

export const bulkDeleteCustomersRequestSchema: Schema<BulkDeleteCustomersRequest> =
  s.object<BulkDeleteCustomersRequest>({
    customerIds: s.array(s.string()),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
