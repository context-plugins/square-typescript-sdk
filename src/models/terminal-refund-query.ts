import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundQueryFilterSchema,
  type TerminalRefundQueryFilter,
} from "./terminal-refund-query-filter.js";
import { terminalRefundQuerySortSchema, type TerminalRefundQuerySort } from "./terminal-refund-query-sort.js";

export type TerminalRefundQuery = {
  filter?: TerminalRefundQueryFilter;
  sort?: TerminalRefundQuerySort;
};

export const terminalRefundQuerySchema: Schema<TerminalRefundQuery> = s.object<TerminalRefundQuery>({
  filter: s.optional(s.lazy(() => terminalRefundQueryFilterSchema)),
  sort: s.optional(s.lazy(() => terminalRefundQuerySortSchema)),
});
