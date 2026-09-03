import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type TerminalCheckoutUpdatedEventObject = {
  checkout?: TerminalCheckout;
};

export const terminalCheckoutUpdatedEventObjectSchema: Schema<TerminalCheckoutUpdatedEventObject> =
  s.object<TerminalCheckoutUpdatedEventObject>({
    checkout: s.optional(s.lazy(() => terminalCheckoutSchema)),
  });
