import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for adding money to a [gift card](entity:GiftCard). */
export const GiftCardActivityAdjustIncrementReason = {
  /** The seller gifted a complimentary gift card balance increase. */
  Complimentary: "COMPLIMENTARY",
  /** The seller increased the gift card balance to accommodate support issues. */
  SupportIssue: "SUPPORT_ISSUE",
  /** The transaction is voided. */
  TransactionVoided: "TRANSACTION_VOIDED",
} as const;
export type GiftCardActivityAdjustIncrementReason =
  | (typeof GiftCardActivityAdjustIncrementReason)[keyof typeof GiftCardActivityAdjustIncrementReason]
  | (string & {});

export const giftCardActivityAdjustIncrementReasonSchema: EnumSchema<GiftCardActivityAdjustIncrementReason> =
  s.enumOf<GiftCardActivityAdjustIncrementReason>(GiftCardActivityAdjustIncrementReason);
