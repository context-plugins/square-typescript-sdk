import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftSchema, type CashDrawerShift } from "./cash-drawer-shift.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCashDrawerShiftResponse = {
  /**
   * This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money,
   * cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective
   * event types.
   */
  cashDrawerShift?: CashDrawerShift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const retrieveCashDrawerShiftResponseSchema: Schema<RetrieveCashDrawerShiftResponse> =
  s.object<RetrieveCashDrawerShiftResponse>({
    cashDrawerShift: s.optional(s.lazy(() => cashDrawerShiftSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      cashDrawerShift: "cash_drawer_shift",
    },
  });
