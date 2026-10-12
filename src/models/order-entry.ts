import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A lightweight description of an [order](entity:Order) that is returned when `returned_entries` is
 * `true` on a [SearchOrdersRequest](api-endpoint:Orders-SearchOrders).
 */
export type OrderEntry = {
  /** The ID of the order. */
  orderId?: string | null;
  /**
   * The version number, which is incremented each time an update is committed to the order. Orders
   * that were not created through the API do not include a version number and therefore cannot be
   * updated.
   *
   * [Read more about working with
   * versions.](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders)
   */
  version?: number;
  /** The location ID the order belongs to. */
  locationId?: string | null;
};

export const orderEntrySchema: Schema<OrderEntry> = s.object<OrderEntry>({
  orderId: s.optionalNullable(s.string()),
  version: s.optional(s.int()),
  locationId: s.optionalNullable(s.string()),
  _keysMap: {
    orderId: "order_id",
    locationId: "location_id",
  },
});
