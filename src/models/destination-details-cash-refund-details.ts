import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** Stores details about a cash refund. Contains only non-confidential information. */
export type DestinationDetailsCashRefundDetails = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  sellerSuppliedMoney: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  changeBackMoney?: Money;
};

export const destinationDetailsCashRefundDetailsSchema: Schema<DestinationDetailsCashRefundDetails> =
  s.object<DestinationDetailsCashRefundDetails>({
    sellerSuppliedMoney: moneySchema,
    changeBackMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      sellerSuppliedMoney: "seller_supplied_money",
      changeBackMoney: "change_back_money",
    },
  });
