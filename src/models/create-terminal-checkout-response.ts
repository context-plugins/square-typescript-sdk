import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type CreateTerminalCheckoutResponse = {
  errors?: Error[];
  checkout?: TerminalCheckout;
};

export const createTerminalCheckoutResponseSchema: Schema<CreateTerminalCheckoutResponse> =
  s.object<CreateTerminalCheckoutResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    checkout: s.optional(s.lazy(() => terminalCheckoutSchema)),
  });
