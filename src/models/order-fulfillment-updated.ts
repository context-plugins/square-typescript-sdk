import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderFulfillmentUpdatedUpdateSchema,
  type OrderFulfillmentUpdatedUpdate,
} from "./order-fulfillment-updated-update.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

export type OrderFulfillmentUpdated = {
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
  /** The fulfillments that were updated with this version change. */
  fulfillmentUpdate?: OrderFulfillmentUpdatedUpdate[] | null;
};

export const orderFulfillmentUpdatedSchema: Schema<OrderFulfillmentUpdated> =
  s.object<OrderFulfillmentUpdated>({
    orderId: s.optionalNullable(s.string()),
    version: s.optional(s.number()),
    locationId: s.optionalNullable(s.string()),
    state: s.optional(s.lazy(() => orderStateSchema)),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    fulfillmentUpdate: s.optionalNullable(s.array(s.lazy(() => orderFulfillmentUpdatedUpdateSchema))),
    _keysMap: {
      orderId: "order_id",
      locationId: "location_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      fulfillmentUpdate: "fulfillment_update",
    },
  });
