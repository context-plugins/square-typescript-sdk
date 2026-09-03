import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderFulfillmentUpdatedUpdateSchema,
  type OrderFulfillmentUpdatedUpdate,
} from "./order-fulfillment-updated-update.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

export type OrderFulfillmentUpdated = {
  orderId?: string | null;
  version?: number;
  locationId?: string | null;
  state?: OrderState;
  createdAt?: string;
  updatedAt?: string;
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
