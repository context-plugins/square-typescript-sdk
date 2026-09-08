import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** A tip being returned. */
export type OrderReturnTip = {
  /** A unique ID that identifies the tip only within this order. */
  uid?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appliedMoney?: Money;
  /** The tender `uid` from the order that contains the original application of this tip. */
  sourceTenderUid?: string | null;
  /** The tender `id` from the order that contains the original application of this tip. */
  sourceTenderId?: string | null;
};

export const orderReturnTipSchema: Schema<OrderReturnTip> = s.object<OrderReturnTip>({
  uid: s.optionalNullable(s.string()),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  sourceTenderUid: s.optionalNullable(s.string()),
  sourceTenderId: s.optionalNullable(s.string()),
  _keysMap: {
    appliedMoney: "applied_money",
    sourceTenderUid: "source_tender_uid",
    sourceTenderId: "source_tender_id",
  },
});
