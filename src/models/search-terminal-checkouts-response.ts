import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type SearchTerminalCheckoutsResponse = {
  errors?: Error[];
  checkouts?: TerminalCheckout[];
  cursor?: string;
};

export const searchTerminalCheckoutsResponseSchema: Schema<SearchTerminalCheckoutsResponse> =
  s.object<SearchTerminalCheckoutsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    checkouts: s.optional(s.array(s.lazy(() => terminalCheckoutSchema))),
    cursor: s.optional(s.string()),
  });
