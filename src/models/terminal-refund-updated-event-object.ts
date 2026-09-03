import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type TerminalRefundUpdatedEventObject = {
  refund?: TerminalRefund;
};

export const terminalRefundUpdatedEventObjectSchema: Schema<TerminalRefundUpdatedEventObject> =
  s.object<TerminalRefundUpdatedEventObject>({
    refund: s.optional(s.lazy(() => terminalRefundSchema)),
  });
