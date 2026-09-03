import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftStateSchema, type CashDrawerShiftState } from "./cash-drawer-shift-state.js";
import { moneySchema, type Money } from "./money.js";

export type CashDrawerShiftSummary = {
  id?: string;
  state?: CashDrawerShiftState;
  openedAt?: string | null;
  endedAt?: string | null;
  closedAt?: string | null;
  description?: string | null;
  openedCashMoney?: Money;
  expectedCashMoney?: Money;
  closedCashMoney?: Money;
  createdAt?: string;
  updatedAt?: string;
  locationId?: string;
};

export const cashDrawerShiftSummarySchema: Schema<CashDrawerShiftSummary> = s.object<CashDrawerShiftSummary>({
  id: s.optional(s.string()),
  state: s.optional(s.lazy(() => cashDrawerShiftStateSchema)),
  openedAt: s.optionalNullable(s.string()),
  endedAt: s.optionalNullable(s.string()),
  closedAt: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  openedCashMoney: s.optional(s.lazy(() => moneySchema)),
  expectedCashMoney: s.optional(s.lazy(() => moneySchema)),
  closedCashMoney: s.optional(s.lazy(() => moneySchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  locationId: s.optional(s.string()),
  _keysMap: {
    openedAt: "opened_at",
    endedAt: "ended_at",
    closedAt: "closed_at",
    openedCashMoney: "opened_cash_money",
    expectedCashMoney: "expected_cash_money",
    closedCashMoney: "closed_cash_money",
    createdAt: "created_at",
    updatedAt: "updated_at",
    locationId: "location_id",
  },
});
