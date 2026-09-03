import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderCreatedSchema, type OrderCreated } from "./order-created.js";

export type OrderCreatedObject = {
  orderCreated?: OrderCreated;
};

export const orderCreatedObjectSchema: Schema<OrderCreatedObject> = s.object<OrderCreatedObject>({
  orderCreated: s.optional(s.lazy(() => orderCreatedSchema)),
  _keysMap: {
    orderCreated: "order_created",
  },
});
