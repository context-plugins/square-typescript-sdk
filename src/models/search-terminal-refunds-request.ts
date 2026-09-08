import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundQuerySchema, type TerminalRefundQuery } from "./terminal-refund-query.js";

export type SearchTerminalRefundsRequest = {
  query?: TerminalRefundQuery;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
   * retrieve the next set of results for the original query.
   */
  cursor?: string;
  /** Limits the number of results returned for a single request. */
  limit?: number;
};

export const searchTerminalRefundsRequestSchema: Schema<SearchTerminalRefundsRequest> =
  s.object<SearchTerminalRefundsRequest>({
    query: s.optional(s.lazy(() => terminalRefundQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
  });
