import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutQuerySchema, type TerminalCheckoutQuery } from "./terminal-checkout-query.js";

export type SearchTerminalCheckoutsRequest = {
  query?: TerminalCheckoutQuery;
  cursor?: string;
  limit?: number;
};

export const searchTerminalCheckoutsRequestSchema: Schema<SearchTerminalCheckoutsRequest> =
  s.object<SearchTerminalCheckoutsRequest>({
    query: s.optional(s.lazy(() => terminalCheckoutQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
  });
