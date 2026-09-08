import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for clearing the balance of a [gift card](entity:GiftCard). */
export const GiftCardActivityClearBalanceReason = {
  /** The seller suspects suspicious activity. */
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  /** The seller cleared the balance to reuse the gift card. */
  ReuseGiftcard: "REUSE_GIFTCARD",
  /**
   * The gift card balance was cleared for an unknown reason.
   *
   * This reason is read-only and cannot be used to create a `CLEAR_BALANCE` activity using the Gift
   * Card Activities API.
   */
  UnknownReason: "UNKNOWN_REASON",
} as const;
export type GiftCardActivityClearBalanceReason =
  | (typeof GiftCardActivityClearBalanceReason)[keyof typeof GiftCardActivityClearBalanceReason]
  | (string & {});

export const giftCardActivityClearBalanceReasonSchema: EnumSchema<GiftCardActivityClearBalanceReason> =
  s.enumOf<GiftCardActivityClearBalanceReason>(GiftCardActivityClearBalanceReason);
