import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

export type OrderUpdated = {
  /** The order's unique ID. */
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
  /** The ID of the seller location that this order is associated with. */
  locationId?: string | null;
  /** The state of the order. */
  state?: OrderState;
  /** The timestamp for when the order was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp for when the order was last updated, in RFC 3339 format. */
  updatedAt?: string;
};

export const orderUpdatedSchema: Schema<OrderUpdated> = s.object<OrderUpdated>({
  orderId: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  locationId: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => orderStateSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    orderId: "order_id",
    locationId: "location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
