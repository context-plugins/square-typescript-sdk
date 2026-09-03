import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityAdjustIncrementReason = {
  Complimentary: "COMPLIMENTARY",
  SupportIssue: "SUPPORT_ISSUE",
  TransactionVoided: "TRANSACTION_VOIDED",
} as const;
export type GiftCardActivityAdjustIncrementReason =
  | (typeof GiftCardActivityAdjustIncrementReason)[keyof typeof GiftCardActivityAdjustIncrementReason]
  | (string & {});

export const giftCardActivityAdjustIncrementReasonSchema: EnumSchema<GiftCardActivityAdjustIncrementReason> =
  s.enumOf<GiftCardActivityAdjustIncrementReason>(GiftCardActivityAdjustIncrementReason);
