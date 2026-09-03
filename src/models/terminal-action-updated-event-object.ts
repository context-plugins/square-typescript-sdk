import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type TerminalActionUpdatedEventObject = {
  action?: TerminalAction;
};

export const terminalActionUpdatedEventObjectSchema: Schema<TerminalActionUpdatedEventObject> =
  s.object<TerminalActionUpdatedEventObject>({
    action: s.optional(s.lazy(() => terminalActionSchema)),
  });
