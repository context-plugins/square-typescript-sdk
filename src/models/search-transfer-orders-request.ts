import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderQuerySchema, type TransferOrderQuery } from "./transfer-order-query.js";

export type SearchTransferOrdersRequest = {
  query?: TransferOrderQuery;
  cursor?: string;
  limit?: number;
};

export const searchTransferOrdersRequestSchema: Schema<SearchTransferOrdersRequest> =
  s.object<SearchTransferOrdersRequest>({
    query: s.optional(s.lazy(() => transferOrderQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
  });
