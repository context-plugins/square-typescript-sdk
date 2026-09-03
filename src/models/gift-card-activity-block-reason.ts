import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityBlockReason = {
  ChargebackBlock: "CHARGEBACK_BLOCK",
} as const;
export type GiftCardActivityBlockReason =
  | (typeof GiftCardActivityBlockReason)[keyof typeof GiftCardActivityBlockReason]
  | (string & {});

export const giftCardActivityBlockReasonSchema: EnumSchema<GiftCardActivityBlockReason> =
  s.enumOf<GiftCardActivityBlockReason>(GiftCardActivityBlockReason);
