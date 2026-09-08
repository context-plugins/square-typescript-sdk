import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the fields that are included in requests to the `BatchRetrieveOrders` endpoint. */
export type BatchRetrieveOrdersRequest = {
  /**
   * The ID of the location for these orders. This field is optional: omit it to retrieve orders
   * within the scope of the current authorization's merchant ID.
   */
  locationId?: string | null;
  /** The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. */
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
