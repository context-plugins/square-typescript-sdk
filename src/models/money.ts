import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

/**
 * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
 * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
 * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
 * transfer. See [Working with Monetary
 * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for more
 * information.
 */
export type Money = {
  /**
   * The amount of money, in the smallest denomination of the currency indicated by `currency`. For
   * example, when `currency` is `USD`, `amount` is in cents. Monetary amounts can be positive or
   * negative. See the specific field description to determine the meaning of the sign in a
   * particular case.
   */
  amount?: number | null;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO
   * 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.optionalNullable(s.number()),
  currency: s.optional(s.lazy(() => currencySchema)),
});
