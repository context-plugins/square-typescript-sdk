import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutCreatedEventObjectSchema,
  type TerminalCheckoutCreatedEventObject,
} from "./terminal-checkout-created-event-object.js";

export type TerminalCheckoutCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalCheckoutCreatedEventObject;
};

export const terminalCheckoutCreatedEventDataSchema: Schema<TerminalCheckoutCreatedEventData> =
  s.object<TerminalCheckoutCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalCheckoutCreatedEventObjectSchema)),
  });
