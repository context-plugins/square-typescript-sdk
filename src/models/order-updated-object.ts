import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderUpdatedSchema, type OrderUpdated } from "./order-updated.js";

export type OrderUpdatedObject = {
  orderUpdated?: OrderUpdated;
};

export const orderUpdatedObjectSchema: Schema<OrderUpdatedObject> = s.object<OrderUpdatedObject>({
  orderUpdated: s.optional(s.lazy(() => orderUpdatedSchema)),
  _keysMap: {
    orderUpdated: "order_updated",
  },
});
