import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

export type BatchRetrieveOrdersResponse = {
  orders?: Order[];
  errors?: Error[];
};

export const batchRetrieveOrdersResponseSchema: Schema<BatchRetrieveOrdersResponse> =
  s.object<BatchRetrieveOrdersResponse>({
    orders: s.optional(s.array(s.lazy(() => orderSchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
