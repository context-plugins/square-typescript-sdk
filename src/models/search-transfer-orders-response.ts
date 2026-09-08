import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

/** Response for searching transfer orders */
export type SearchTransferOrdersResponse = {
  /** List of transfer orders matching the search criteria */
  transferOrders?: TransferOrder[];
  /** Pagination cursor for fetching the next page of results */
  cursor?: string;
  /** Any errors that occurred during the request */
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
