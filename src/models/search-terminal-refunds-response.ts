import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type SearchTerminalRefundsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalRefund` objects. */
  refunds?: TerminalRefund[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
};

export const searchTerminalRefundsResponseSchema: Schema<SearchTerminalRefundsResponse> =
  s.object<SearchTerminalRefundsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refunds: s.optional(s.array(s.lazy(() => terminalRefundSchema))),
    cursor: s.optional(s.string()),
  });
