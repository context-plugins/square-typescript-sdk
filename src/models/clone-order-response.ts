import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

export type CloneOrderResponse = {
  order?: Order;
  errors?: Error[];
};

export const cloneOrderResponseSchema: Schema<CloneOrderResponse> = s.object<CloneOrderResponse>({
  order: s.optional(s.lazy(() => orderSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
