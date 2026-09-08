import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerDeviceSchema, type CashDrawerDevice } from "./cash-drawer-device.js";
import { cashDrawerShiftStateSchema, type CashDrawerShiftState } from "./cash-drawer-shift-state.js";
import { moneySchema, type Money } from "./money.js";

/**
 * This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money,
 * cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective
 * event types.
 */
export type CashDrawerShift = {
  /** The shift unique ID. */
  id?: string;
  /** The current state of a cash drawer shift. */
  state?: CashDrawerShiftState;
  /** The time when the shift began, in ISO 8601 format. */
  openedAt?: string | null;
  /** The time when the shift ended, in ISO 8601 format. */
  endedAt?: string | null;
  /** The time when the shift was closed, in ISO 8601 format. */
  closedAt?: string | null;
  /** The free-form text description of a cash drawer by an employee. */
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
  cashPaymentMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  cashRefundsMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  cashPaidInMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  cashPaidOutMoney?: Money;
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
  device?: CashDrawerDevice;
  /** The shift start time in RFC 3339 format. */
  createdAt?: string;
  /** The shift updated at time in RFC 3339 format. */
  updatedAt?: string;
  /** The ID of the location the cash drawer shift belongs to. */
  locationId?: string;
  /**
   * The IDs of all team members that were logged into Square Point of Sale at any point while the
   * cash drawer shift was open.
   */
  teamMemberIds?: string[];
  /** The ID of the team member that started the cash drawer shift. */
  openingTeamMemberId?: string;
  /** The ID of the team member that ended the cash drawer shift. */
  endingTeamMemberId?: string;
  /**
   * The ID of the team member that closed the cash drawer shift by auditing the cash drawer
   * contents.
   */
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
