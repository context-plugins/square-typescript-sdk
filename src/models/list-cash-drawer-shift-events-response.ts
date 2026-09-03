import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerShiftEventSchema, type CashDrawerShiftEvent } from "./cash-drawer-shift-event.js";
import { errorSchema, type Error } from "./error.js";

export type ListCashDrawerShiftEventsResponse = {
  cursor?: string;
  errors?: Error[];
  cashDrawerShiftEvents?: CashDrawerShiftEvent[];
};

export const listCashDrawerShiftEventsResponseSchema: Schema<ListCashDrawerShiftEventsResponse> =
  s.object<ListCashDrawerShiftEventsResponse>({
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cashDrawerShiftEvents: s.optional(s.array(s.lazy(() => cashDrawerShiftEventSchema))),
    _keysMap: {
      cashDrawerShiftEvents: "cash_drawer_shift_events",
    },
  });
