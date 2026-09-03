import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftSchema, type CashDrawerShift } from "./cash-drawer-shift.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCashDrawerShiftResponse = {
  cashDrawerShift?: CashDrawerShift;
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
