import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderFulfillmentUpdatedSchema, type OrderFulfillmentUpdated } from "./order-fulfillment-updated.js";

export type OrderFulfillmentUpdatedObject = {
  orderFulfillmentUpdated?: OrderFulfillmentUpdated;
};

export const orderFulfillmentUpdatedObjectSchema: Schema<OrderFulfillmentUpdatedObject> =
  s.object<OrderFulfillmentUpdatedObject>({
    orderFulfillmentUpdated: s.optional(s.lazy(() => orderFulfillmentUpdatedSchema)),
    _keysMap: {
      orderFulfillmentUpdated: "order_fulfillment_updated",
    },
  });
