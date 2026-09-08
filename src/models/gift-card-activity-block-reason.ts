import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for blocking a [gift card](entity:GiftCard). */
export const GiftCardActivityBlockReason = {
  /**
   * The gift card is blocked because the buyer initiated a chargeback on the gift card purchase.
   */
  ChargebackBlock: "CHARGEBACK_BLOCK",
} as const;
export type GiftCardActivityBlockReason =
  | (typeof GiftCardActivityBlockReason)[keyof typeof GiftCardActivityBlockReason]
  | (string & {});

export const giftCardActivityBlockReasonSchema: EnumSchema<GiftCardActivityBlockReason> =
  s.enumOf<GiftCardActivityBlockReason>(GiftCardActivityBlockReason);
