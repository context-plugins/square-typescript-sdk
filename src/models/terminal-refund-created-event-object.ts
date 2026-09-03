import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type TerminalRefundCreatedEventObject = {
  refund?: TerminalRefund;
};

export const terminalRefundCreatedEventObjectSchema: Schema<TerminalRefundCreatedEventObject> =
  s.object<TerminalRefundCreatedEventObject>({
    refund: s.optional(s.lazy(() => terminalRefundSchema)),
  });
