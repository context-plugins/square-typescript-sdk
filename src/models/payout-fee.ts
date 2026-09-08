import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { payoutFeeTypeSchema, type PayoutFeeType } from "./payout-fee-type.js";

/** Represents a payout fee that can incur as part of a payout. */
export type PayoutFee = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: string | null;
  /** Represents the type of payout fee that can incur as part of a payout. */
  type?: PayoutFeeType;
};

export const payoutFeeSchema: Schema<PayoutFee> = s.object<PayoutFee>({
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  effectiveAt: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => payoutFeeTypeSchema)),
  _keysMap: {
    amountMoney: "amount_money",
    effectiveAt: "effective_at",
  },
});
