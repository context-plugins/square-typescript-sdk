import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type DismissTerminalCheckoutResponse = {
  errors?: Error[];
  checkout?: TerminalCheckout;
};

export const dismissTerminalCheckoutResponseSchema: Schema<DismissTerminalCheckoutResponse> =
  s.object<DismissTerminalCheckoutResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    checkout: s.optional(s.lazy(() => terminalCheckoutSchema)),
  });
