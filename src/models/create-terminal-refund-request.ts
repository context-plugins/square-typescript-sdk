import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type CreateTerminalRefundRequest = {
  idempotencyKey: string;
  refund?: TerminalRefund;
};

export const createTerminalRefundRequestSchema: Schema<CreateTerminalRefundRequest> =
  s.object<CreateTerminalRefundRequest>({
    idempotencyKey: s.string(),
    refund: s.optional(s.lazy(() => terminalRefundSchema)),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
