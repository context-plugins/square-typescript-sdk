import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundUpdatedEventObjectSchema,
  type TerminalRefundUpdatedEventObject,
} from "./terminal-refund-updated-event-object.js";

export type TerminalRefundUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalRefundUpdatedEventObject;
};

export const terminalRefundUpdatedEventDataSchema: Schema<TerminalRefundUpdatedEventData> =
  s.object<TerminalRefundUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalRefundUpdatedEventObjectSchema)),
  });
