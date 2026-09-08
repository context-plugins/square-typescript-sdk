import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftSummarySchema, type CashDrawerShiftSummary } from "./cash-drawer-shift-summary.js";
import { errorSchema, type Error } from "./error.js";

export type ListCashDrawerShiftsResponse = {
  /**
   * Opaque cursor for fetching the next page of results. Cursor is not present in the last page of
   * results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A collection of CashDrawerShiftSummary objects for shifts that match the query. */
  cashDrawerShifts?: CashDrawerShiftSummary[];
};

export const listCashDrawerShiftsResponseSchema: Schema<ListCashDrawerShiftsResponse> =
  s.object<ListCashDrawerShiftsResponse>({
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cashDrawerShifts: s.optional(s.array(s.lazy(() => cashDrawerShiftSummarySchema))),
    _keysMap: {
      cashDrawerShifts: "cash_drawer_shifts",
    },
  });
