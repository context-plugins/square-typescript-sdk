import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type SearchTerminalActionsResponse = {
  errors?: Error[];
  action?: TerminalAction[];
  cursor?: string;
};

export const searchTerminalActionsResponseSchema: Schema<SearchTerminalActionsResponse> =
  s.object<SearchTerminalActionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    action: s.optional(s.array(s.lazy(() => terminalActionSchema))),
    cursor: s.optional(s.string()),
  });
