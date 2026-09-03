import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type TerminalCheckoutQuerySort = {
  sortOrder?: SortOrder;
};

export const terminalCheckoutQuerySortSchema: Schema<TerminalCheckoutQuerySort> =
  s.object<TerminalCheckoutQuerySort>({
    sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
    _keysMap: {
      sortOrder: "sort_order",
    },
  });
