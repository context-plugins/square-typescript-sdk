import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutQuerySchema, type TerminalCheckoutQuery } from "./terminal-checkout-query.js";

export type SearchTerminalCheckoutsRequest = {
  query?: TerminalCheckoutQuery;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
   * retrieve the next set of results for the original query. See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
  /** Limits the number of results returned for a single request. */
  limit?: number;
};

export const searchTerminalCheckoutsRequestSchema: Schema<SearchTerminalCheckoutsRequest> =
  s.object<SearchTerminalCheckoutsRequest>({
    query: s.optional(s.lazy(() => terminalCheckoutQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.int()),
  });
