import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for unblocking a [gift card](entity:GiftCard). */
export const GiftCardActivityUnblockReason = {
  /** The gift card is unblocked because a chargeback was ruled in favor of the seller. */
  ChargebackUnblock: "CHARGEBACK_UNBLOCK",
} as const;
export type GiftCardActivityUnblockReason =
  | (typeof GiftCardActivityUnblockReason)[keyof typeof GiftCardActivityUnblockReason]
  | (string & {});

export const giftCardActivityUnblockReasonSchema: EnumSchema<GiftCardActivityUnblockReason> =
  s.enumOf<GiftCardActivityUnblockReason>(GiftCardActivityUnblockReason);
