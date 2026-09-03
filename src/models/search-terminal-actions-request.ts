import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalActionQuerySchema, type TerminalActionQuery } from "./terminal-action-query.js";

export type SearchTerminalActionsRequest = {
  query?: TerminalActionQuery;
  cursor?: string;
  limit?: number;
};

export const searchTerminalActionsRequestSchema: Schema<SearchTerminalActionsRequest> =
  s.object<SearchTerminalActionsRequest>({
    query: s.optional(s.lazy(() => terminalActionQuerySchema)),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
  });
