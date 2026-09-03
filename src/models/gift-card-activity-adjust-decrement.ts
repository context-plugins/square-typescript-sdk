import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityAdjustDecrementReasonSchema,
  type GiftCardActivityAdjustDecrementReason,
} from "./gift-card-activity-adjust-decrement-reason.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityAdjustDecrement = {
  amountMoney: Money;
  reason: GiftCardActivityAdjustDecrementReason;
};

export const giftCardActivityAdjustDecrementSchema: Schema<GiftCardActivityAdjustDecrement> =
  s.object<GiftCardActivityAdjustDecrement>({
    amountMoney: moneySchema,
    reason: giftCardActivityAdjustDecrementReasonSchema,
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
