import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type SearchTerminalActionsResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalAction`s. */
  action?: TerminalAction[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
};

export const searchTerminalActionsResponseSchema: Schema<SearchTerminalActionsResponse> =
  s.object<SearchTerminalActionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    action: s.optional(s.array(s.lazy(() => terminalActionSchema))),
    cursor: s.optional(s.string()),
  });
