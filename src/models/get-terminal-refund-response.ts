import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type GetTerminalRefundResponse = {
  errors?: Error[];
  refund?: TerminalRefund;
};

export const getTerminalRefundResponseSchema: Schema<GetTerminalRefundResponse> =
  s.object<GetTerminalRefundResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refund: s.optional(s.lazy(() => terminalRefundSchema)),
  });
