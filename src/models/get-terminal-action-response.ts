import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type GetTerminalActionResponse = {
  errors?: Error[];
  action?: TerminalAction;
};

export const getTerminalActionResponseSchema: Schema<GetTerminalActionResponse> =
  s.object<GetTerminalActionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    action: s.optional(s.lazy(() => terminalActionSchema)),
  });
