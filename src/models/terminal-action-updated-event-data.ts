import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionUpdatedEventObjectSchema,
  type TerminalActionUpdatedEventObject,
} from "./terminal-action-updated-event-object.js";

export type TerminalActionUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalActionUpdatedEventObject;
};

export const terminalActionUpdatedEventDataSchema: Schema<TerminalActionUpdatedEventData> =
  s.object<TerminalActionUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalActionUpdatedEventObjectSchema)),
  });
