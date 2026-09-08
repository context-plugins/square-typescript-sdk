import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutCreatedEventObjectSchema,
  type TerminalCheckoutCreatedEventObject,
} from "./terminal-checkout-created-event-object.js";

export type TerminalCheckoutCreatedEventData = {
  /** Name of the created object’s type, `"checkout"`. */
  type?: string | null;
  /** ID of the created terminal checkout. */
  id?: string;
  object?: TerminalCheckoutCreatedEventObject;
};

export const terminalCheckoutCreatedEventDataSchema: Schema<TerminalCheckoutCreatedEventData> =
  s.object<TerminalCheckoutCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalCheckoutCreatedEventObjectSchema)),
  });
