import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type TerminalCheckoutCreatedEventObject = {
  checkout?: TerminalCheckout;
};

export const terminalCheckoutCreatedEventObjectSchema: Schema<TerminalCheckoutCreatedEventObject> =
  s.object<TerminalCheckoutCreatedEventObject>({
    checkout: s.optional(s.lazy(() => terminalCheckoutSchema)),
  });
