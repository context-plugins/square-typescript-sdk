import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutQueryFilterSchema,
  type TerminalCheckoutQueryFilter,
} from "./terminal-checkout-query-filter.js";
import {
  terminalCheckoutQuerySortSchema,
  type TerminalCheckoutQuerySort,
} from "./terminal-checkout-query-sort.js";

export type TerminalCheckoutQuery = {
  filter?: TerminalCheckoutQueryFilter;
  sort?: TerminalCheckoutQuerySort;
};

export const terminalCheckoutQuerySchema: Schema<TerminalCheckoutQuery> = s.object<TerminalCheckoutQuery>({
  filter: s.optional(s.lazy(() => terminalCheckoutQueryFilterSchema)),
  sort: s.optional(s.lazy(() => terminalCheckoutQuerySortSchema)),
});
