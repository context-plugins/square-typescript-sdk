import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type UpdateOrderRequest = {
  order?: Order;
  fieldsToClear?: string[] | null;
  idempotencyKey?: string | null;
};

export const updateOrderRequestSchema: Schema<UpdateOrderRequest> = s.object<UpdateOrderRequest>({
  order: s.optional(s.lazy(() => orderSchema)),
  fieldsToClear: s.optionalNullable(s.array(s.string())),
  idempotencyKey: s.optionalNullable(s.string()),
  _keysMap: {
    fieldsToClear: "fields_to_clear",
    idempotencyKey: "idempotency_key",
  },
});
