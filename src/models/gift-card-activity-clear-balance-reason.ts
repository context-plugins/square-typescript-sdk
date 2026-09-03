import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityClearBalanceReason = {
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  ReuseGiftcard: "REUSE_GIFTCARD",
  UnknownReason: "UNKNOWN_REASON",
} as const;
export type GiftCardActivityClearBalanceReason =
  | (typeof GiftCardActivityClearBalanceReason)[keyof typeof GiftCardActivityClearBalanceReason]
  | (string & {});

export const giftCardActivityClearBalanceReasonSchema: EnumSchema<GiftCardActivityClearBalanceReason> =
  s.enumOf<GiftCardActivityClearBalanceReason>(GiftCardActivityClearBalanceReason);
