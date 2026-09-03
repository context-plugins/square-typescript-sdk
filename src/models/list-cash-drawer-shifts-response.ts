import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftSummarySchema, type CashDrawerShiftSummary } from "./cash-drawer-shift-summary.js";
import { errorSchema, type Error } from "./error.js";

export type ListCashDrawerShiftsResponse = {
  cursor?: string;
  errors?: Error[];
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
