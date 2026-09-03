import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityRedeemStatusSchema,
  type GiftCardActivityRedeemStatus,
} from "./gift-card-activity-redeem-status.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityRedeem = {
  amountMoney: Money;
  paymentId?: string;
  referenceId?: string | null;
  status?: GiftCardActivityRedeemStatus;
};

export const giftCardActivityRedeemSchema: Schema<GiftCardActivityRedeem> = s.object<GiftCardActivityRedeem>({
  amountMoney: moneySchema,
  paymentId: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => giftCardActivityRedeemStatusSchema)),
  _keysMap: {
    amountMoney: "amount_money",
    paymentId: "payment_id",
    referenceId: "reference_id",
  },
});
