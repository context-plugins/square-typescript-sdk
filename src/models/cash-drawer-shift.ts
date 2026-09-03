import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerDeviceSchema, type CashDrawerDevice } from "./cash-drawer-device.js";
import { cashDrawerShiftStateSchema, type CashDrawerShiftState } from "./cash-drawer-shift-state.js";
import { moneySchema, type Money } from "./money.js";

export type CashDrawerShift = {
  id?: string;
  state?: CashDrawerShiftState;
  openedAt?: string | null;
  endedAt?: string | null;
  closedAt?: string | null;
  description?: string | null;
  openedCashMoney?: Money;
  cashPaymentMoney?: Money;
  cashRefundsMoney?: Money;
  cashPaidInMoney?: Money;
  cashPaidOutMoney?: Money;
  expectedCashMoney?: Money;
  closedCashMoney?: Money;
  device?: CashDrawerDevice;
  createdAt?: string;
  updatedAt?: string;
  locationId?: string;
  teamMemberIds?: string[];
  openingTeamMemberId?: string;
  endingTeamMemberId?: string;
  closingTeamMemberId?: string;
};

export const cashDrawerShiftSchema: Schema<CashDrawerShift> = s.object<CashDrawerShift>({
  id: s.optional(s.string()),
  state: s.optional(s.lazy(() => cashDrawerShiftStateSchema)),
  openedAt: s.optionalNullable(s.string()),
  endedAt: s.optionalNullable(s.string()),
  closedAt: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  openedCashMoney: s.optional(s.lazy(() => moneySchema)),
  cashPaymentMoney: s.optional(s.lazy(() => moneySchema)),
  cashRefundsMoney: s.optional(s.lazy(() => moneySchema)),
  cashPaidInMoney: s.optional(s.lazy(() => moneySchema)),
  cashPaidOutMoney: s.optional(s.lazy(() => moneySchema)),
  expectedCashMoney: s.optional(s.lazy(() => moneySchema)),
  closedCashMoney: s.optional(s.lazy(() => moneySchema)),
  device: s.optional(s.lazy(() => cashDrawerDeviceSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  locationId: s.optional(s.string()),
  teamMemberIds: s.optional(s.array(s.string())),
  openingTeamMemberId: s.optional(s.string()),
  endingTeamMemberId: s.optional(s.string()),
  closingTeamMemberId: s.optional(s.string()),
  _keysMap: {
    openedAt: "opened_at",
    endedAt: "ended_at",
    closedAt: "closed_at",
    openedCashMoney: "opened_cash_money",
    cashPaymentMoney: "cash_payment_money",
    cashRefundsMoney: "cash_refunds_money",
    cashPaidInMoney: "cash_paid_in_money",
    cashPaidOutMoney: "cash_paid_out_money",
    expectedCashMoney: "expected_cash_money",
    closedCashMoney: "closed_cash_money",
    createdAt: "created_at",
    updatedAt: "updated_at",
    locationId: "location_id",
    teamMemberIds: "team_member_ids",
    openingTeamMemberId: "opening_team_member_id",
    endingTeamMemberId: "ending_team_member_id",
    closingTeamMemberId: "closing_team_member_id",
  },
});
