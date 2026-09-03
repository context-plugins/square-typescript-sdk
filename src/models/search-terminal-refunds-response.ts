import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type SearchTerminalRefundsResponse = {
  errors?: Error[];
  refunds?: TerminalRefund[];
  cursor?: string;
};

export const searchTerminalRefundsResponseSchema: Schema<SearchTerminalRefundsResponse> =
  s.object<SearchTerminalRefundsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refunds: s.optional(s.array(s.lazy(() => terminalRefundSchema))),
    cursor: s.optional(s.string()),
  });
