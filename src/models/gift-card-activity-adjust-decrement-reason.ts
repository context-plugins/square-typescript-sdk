import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for deducting money from a [gift card](entity:GiftCard). */
export const GiftCardActivityAdjustDecrementReason = {
  /**
   * The balance was decreased because the seller detected suspicious or fraudulent activity on the
   * gift card.
   */
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  /** The balance was decreased to reverse an unintentional balance increase. */
  BalanceAccidentallyIncreased: "BALANCE_ACCIDENTALLY_INCREASED",
  /** The balance was decreased to accommodate support issues. */
  SupportIssue: "SUPPORT_ISSUE",
  /**
   * The balance was decreased because the order used to purchase or reload the gift card was
   * refunded.
   */
  PurchaseWasRefunded: "PURCHASE_WAS_REFUNDED",
} as const;
export type GiftCardActivityAdjustDecrementReason =
  | (typeof GiftCardActivityAdjustDecrementReason)[keyof typeof GiftCardActivityAdjustDecrementReason]
  | (string & {});

export const giftCardActivityAdjustDecrementReasonSchema: EnumSchema<GiftCardActivityAdjustDecrementReason> =
  s.enumOf<GiftCardActivityAdjustDecrementReason>(GiftCardActivityAdjustDecrementReason);
