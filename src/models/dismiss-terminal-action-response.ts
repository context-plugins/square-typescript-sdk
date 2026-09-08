import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type DismissTerminalActionResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents an action processed by the Square Terminal. */
  action?: TerminalAction;
};

export const dismissTerminalActionResponseSchema: Schema<DismissTerminalActionResponse> =
  s.object<DismissTerminalActionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    action: s.optional(s.lazy(() => terminalActionSchema)),
  });
