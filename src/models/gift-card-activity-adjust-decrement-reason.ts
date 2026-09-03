import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityAdjustDecrementReason = {
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  BalanceAccidentallyIncreased: "BALANCE_ACCIDENTALLY_INCREASED",
  SupportIssue: "SUPPORT_ISSUE",
  PurchaseWasRefunded: "PURCHASE_WAS_REFUNDED",
} as const;
export type GiftCardActivityAdjustDecrementReason =
  | (typeof GiftCardActivityAdjustDecrementReason)[keyof typeof GiftCardActivityAdjustDecrementReason]
  | (string & {});

export const giftCardActivityAdjustDecrementReasonSchema: EnumSchema<GiftCardActivityAdjustDecrementReason> =
  s.enumOf<GiftCardActivityAdjustDecrementReason>(GiftCardActivityAdjustDecrementReason);
