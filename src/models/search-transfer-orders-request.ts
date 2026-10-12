import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderQuerySchema, type TransferOrderQuery } from "./transfer-order-query.js";

/** Request to search transfer orders */
export type SearchTransferOrdersRequest = {
  /** Query parameters for searching transfer orders */
  query?: TransferOrderQuery;
  /** Pagination cursor from a previous search response */
  cursor?: string;
  /** Maximum number of results to return (1-100) */
  limit?: number;
};

export const searchTransferOrdersRequestSchema: Schema<SearchTransferOrdersRequest> =
  s.object<SearchTransferOrdersRequest>({
    query: s.optional(s.lazy(() => transferOrderQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.int()),
  });
