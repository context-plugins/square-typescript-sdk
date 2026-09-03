import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalRefundQuerySort = {
  sortOrder?: string | null;
};

export const terminalRefundQuerySortSchema: Schema<TerminalRefundQuerySort> =
  s.object<TerminalRefundQuerySort>({
    sortOrder: s.optionalNullable(s.string()),
    _keysMap: {
      sortOrder: "sort_order",
    },
  });
