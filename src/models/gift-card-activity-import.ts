import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents details about an `IMPORT` [gift card activity type](entity:GiftCardActivityType). This
 * activity type is used when Square imports a third-party gift card, in which case the `gan_source`
 * of the gift card is set to `OTHER`.
 */
export type GiftCardActivityImport = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
};

export const giftCardActivityImportSchema: Schema<GiftCardActivityImport> = s.object<GiftCardActivityImport>({
  amountMoney: moneySchema,
  _keysMap: {
    amountMoney: "amount_money",
  },
});
