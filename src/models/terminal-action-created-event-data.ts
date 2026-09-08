import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionCreatedEventObjectSchema,
  type TerminalActionCreatedEventObject,
} from "./terminal-action-created-event-object.js";

export type TerminalActionCreatedEventData = {
  /** Name of the created object’s type, `"action"`. */
  type?: string | null;
  /** ID of the created terminal action. */
  id?: string;
  object?: TerminalActionCreatedEventObject;
};

export const terminalActionCreatedEventDataSchema: Schema<TerminalActionCreatedEventData> =
  s.object<TerminalActionCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => terminalActionCreatedEventObjectSchema)),
  });
