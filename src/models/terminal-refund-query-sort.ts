import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalRefundQuerySort = {
  /**
   * The order in which results are listed.
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string | null;
};

export const terminalRefundQuerySortSchema: Schema<TerminalRefundQuerySort> =
  s.object<TerminalRefundQuerySort>({
    sortOrder: s.optionalNullable(s.string()),
    _keysMap: {
      sortOrder: "sort_order",
    },
  });
