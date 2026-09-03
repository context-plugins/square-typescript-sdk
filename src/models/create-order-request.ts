import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type CreateOrderRequest = {
  order?: Order;
  idempotencyKey?: string;
};

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>({
  order: s.optional(s.lazy(() => orderSchema)),
  idempotencyKey: s.optional(s.string()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
