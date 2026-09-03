import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BatchRetrieveOrdersRequest = {
  locationId?: string | null;
  orderIds: string[];
};

export const batchRetrieveOrdersRequestSchema: Schema<BatchRetrieveOrdersRequest> =
  s.object<BatchRetrieveOrdersRequest>({
    locationId: s.optionalNullable(s.string()),
    orderIds: s.array(s.string()),
    _keysMap: {
      locationId: "location_id",
      orderIds: "order_ids",
    },
  });
