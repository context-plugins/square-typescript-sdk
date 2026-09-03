import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type DismissTerminalActionResponse = {
  errors?: Error[];
  action?: TerminalAction;
};

export const dismissTerminalActionResponseSchema: Schema<DismissTerminalActionResponse> =
  s.object<DismissTerminalActionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    action: s.optional(s.lazy(() => terminalActionSchema)),
  });
