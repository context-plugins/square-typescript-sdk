import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionCreatedEventObjectSchema,
  type TerminalActionCreatedEventObject,
} from "./terminal-action-created-event-object.js";

export type TerminalActionCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: TerminalActionCreatedEventObject;
};

export const terminalActionCreatedEventDataSchema: Schema<TerminalActionCreatedEventData> =
  s.object<TerminalActionCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalActionCreatedEventObjectSchema)),
  });
