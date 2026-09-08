import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** Represents the Square processing fee. */
export type ProcessingFee = {
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: string | null;
  /** The type of fee assessed or adjusted. The fee type can be `INITIAL` or `ADJUSTMENT`. */
  type?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
};

export const processingFeeSchema: Schema<ProcessingFee> = s.object<ProcessingFee>({
  effectiveAt: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    effectiveAt: "effective_at",
    amountMoney: "amount_money",
  },
});
