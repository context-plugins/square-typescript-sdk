import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

export type SearchTransferOrdersResponse = {
  transferOrders?: TransferOrder[];
  cursor?: string;
  errors?: Error[];
};

export const searchTransferOrdersResponseSchema: Schema<SearchTransferOrdersResponse> =
  s.object<SearchTransferOrdersResponse>({
    transferOrders: s.optional(s.array(s.lazy(() => transferOrderSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      transferOrders: "transfer_orders",
    },
  });
