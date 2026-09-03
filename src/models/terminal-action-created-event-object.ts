import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type TerminalActionCreatedEventObject = {
  action?: TerminalAction;
};

export const terminalActionCreatedEventObjectSchema: Schema<TerminalActionCreatedEventObject> =
  s.object<TerminalActionCreatedEventObject>({
    action: s.optional(s.lazy(() => terminalActionSchema)),
  });
