import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type TerminalActionQuerySort = {
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  sortOrder?: SortOrder;
};

export const terminalActionQuerySortSchema: Schema<TerminalActionQuerySort> =
  s.object<TerminalActionQuerySort>({
    sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
    _keysMap: {
      sortOrder: "sort_order",
    },
  });
