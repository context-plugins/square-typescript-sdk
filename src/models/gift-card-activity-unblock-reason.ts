import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityUnblockReason = {
  ChargebackUnblock: "CHARGEBACK_UNBLOCK",
} as const;
export type GiftCardActivityUnblockReason =
  | (typeof GiftCardActivityUnblockReason)[keyof typeof GiftCardActivityUnblockReason]
  | (string & {});

export const giftCardActivityUnblockReasonSchema: EnumSchema<GiftCardActivityUnblockReason> =
  s.enumOf<GiftCardActivityUnblockReason>(GiftCardActivityUnblockReason);
