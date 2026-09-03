import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type CreateTerminalCheckoutRequest = {
  idempotencyKey: string;
  checkout: TerminalCheckout;
};

export const createTerminalCheckoutRequestSchema: Schema<CreateTerminalCheckoutRequest> =
  s.object<CreateTerminalCheckoutRequest>({
    idempotencyKey: s.string(),
    checkout: terminalCheckoutSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
