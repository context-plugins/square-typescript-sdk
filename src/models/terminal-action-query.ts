import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionQueryFilterSchema,
  type TerminalActionQueryFilter,
} from "./terminal-action-query-filter.js";
import { terminalActionQuerySortSchema, type TerminalActionQuerySort } from "./terminal-action-query-sort.js";

export type TerminalActionQuery = {
  filter?: TerminalActionQueryFilter;
  sort?: TerminalActionQuerySort;
};

export const terminalActionQuerySchema: Schema<TerminalActionQuery> = s.object<TerminalActionQuery>({
  filter: s.optional(s.lazy(() => terminalActionQueryFilterSchema)),
  sort: s.optional(s.lazy(() => terminalActionQuerySortSchema)),
});
