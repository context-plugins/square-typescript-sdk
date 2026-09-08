import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftStateSchema, type CashDrawerShiftState } from "./cash-drawer-shift-state.js";
import { moneySchema, type Money } from "./money.js";

/**
 * The summary of a closed cash drawer shift. This model contains only the money counted to start a
 * cash drawer shift, counted at the end of the shift, and the amount that should be in the drawer
 * at shift end based on summing all cash drawer shift events.
 */
export type CashDrawerShiftSummary = {
  /** The shift unique ID. */
  id?: string;
  /** The current state of a cash drawer shift. */
  state?: CashDrawerShiftState;
  /** The shift start time in ISO 8601 format. */
  openedAt?: string | null;
  /** The shift end time in ISO 8601 format. */
  endedAt?: string | null;
  /** The shift close time in ISO 8601 format. */
  closedAt?: string | null;
  /** An employee free-text description of a cash drawer shift. */
  description?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  openedCashMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  expectedCashMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  closedCashMoney?: Money;
  /** The shift start time in RFC 3339 format. */
  createdAt?: string;
  /** The shift updated at time in RFC 3339 format. */
  updatedAt?: string;
  /** The ID of the location the cash drawer shift belongs to. */
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
