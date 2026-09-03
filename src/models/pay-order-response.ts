import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

export type PayOrderResponse = {
  errors?: Error[];
  order?: Order;
};

export const payOrderResponseSchema: Schema<PayOrderResponse> = s.object<PayOrderResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  order: s.optional(s.lazy(() => orderSchema)),
});
