import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundCreatedEventObjectSchema,
  type TerminalRefundCreatedEventObject,
} from "./terminal-refund-created-event-object.js";

export type TerminalRefundCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalRefundCreatedEventObject;
};

export const terminalRefundCreatedEventDataSchema: Schema<TerminalRefundCreatedEventData> =
  s.object<TerminalRefundCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalRefundCreatedEventObjectSchema)),
  });
