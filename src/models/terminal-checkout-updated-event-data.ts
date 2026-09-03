import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutUpdatedEventObjectSchema,
  type TerminalCheckoutUpdatedEventObject,
} from "./terminal-checkout-updated-event-object.js";

export type TerminalCheckoutUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalCheckoutUpdatedEventObject;
};

export const terminalCheckoutUpdatedEventDataSchema: Schema<TerminalCheckoutUpdatedEventData> =
  s.object<TerminalCheckoutUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalCheckoutUpdatedEventObjectSchema)),
  });
