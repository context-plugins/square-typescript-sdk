import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityAdjustIncrementReasonSchema,
  type GiftCardActivityAdjustIncrementReason,
} from "./gift-card-activity-adjust-increment-reason.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityAdjustIncrement = {
  amountMoney: Money;
  reason: GiftCardActivityAdjustIncrementReason;
};

export const giftCardActivityAdjustIncrementSchema: Schema<GiftCardActivityAdjustIncrement> =
  s.object<GiftCardActivityAdjustIncrement>({
    amountMoney: moneySchema,
    reason: giftCardActivityAdjustIncrementReasonSchema,
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
