import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

export type CalculateOrderResponse = {
  order?: Order;
  errors?: Error[];
};

export const calculateOrderResponseSchema: Schema<CalculateOrderResponse> = s.object<CalculateOrderResponse>({
  order: s.optional(s.lazy(() => orderSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
