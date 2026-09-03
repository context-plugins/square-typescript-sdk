import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderEntrySchema, type OrderEntry } from "./order-entry.js";
import { orderSchema, type Order } from "./order.js";

export type SearchOrdersResponse = {
  orderEntries?: OrderEntry[];
  orders?: Order[];
  cursor?: string;
  errors?: Error[];
};

export const searchOrdersResponseSchema: Schema<SearchOrdersResponse> = s.object<SearchOrdersResponse>({
  orderEntries: s.optional(s.array(s.lazy(() => orderEntrySchema))),
  orders: s.optional(s.array(s.lazy(() => orderSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    orderEntries: "order_entries",
  },
});
