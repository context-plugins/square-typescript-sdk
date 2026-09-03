import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundQuerySchema, type TerminalRefundQuery } from "./terminal-refund-query.js";

export type SearchTerminalRefundsRequest = {
  query?: TerminalRefundQuery;
  cursor?: string;
  limit?: number;
};

export const searchTerminalRefundsRequestSchema: Schema<SearchTerminalRefundsRequest> =
  s.object<SearchTerminalRefundsRequest>({
    query: s.optional(s.lazy(() => terminalRefundQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
  });
