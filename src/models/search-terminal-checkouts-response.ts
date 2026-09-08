import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type SearchTerminalCheckoutsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalCheckout` objects. */
  checkouts?: TerminalCheckout[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
};

export const searchTerminalCheckoutsResponseSchema: Schema<SearchTerminalCheckoutsResponse> =
  s.object<SearchTerminalCheckoutsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    checkouts: s.optional(s.array(s.lazy(() => terminalCheckoutSchema))),
    cursor: s.optional(s.string()),
  });
