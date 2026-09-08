import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Details related to an attempt to apply a card surcharge to this payment. When surcharge
 * eligibility is not known in advance, such as when the card type (debit or credit) is required to
 * make the eligibility determination, proposed_card_surcharge_money and
 * proposed_additional_amount_money will match the values in the request, while card_surcharge_money
 * and additional_amount_money are present only when the payment has a surcharge applied.
 */
export type CardSurchargeDetails = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  cardSurchargeMoney?: Money;
};

export const cardSurchargeDetailsSchema: Schema<CardSurchargeDetails> = s.object<CardSurchargeDetails>({
  cardSurchargeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    cardSurchargeMoney: "card_surcharge_money",
  },
});
