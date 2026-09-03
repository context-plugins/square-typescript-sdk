import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityDeactivateReason = {
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  UnknownReason: "UNKNOWN_REASON",
  ChargebackDeactivate: "CHARGEBACK_DEACTIVATE",
} as const;
export type GiftCardActivityDeactivateReason =
  | (typeof GiftCardActivityDeactivateReason)[keyof typeof GiftCardActivityDeactivateReason]
  | (string & {});

export const giftCardActivityDeactivateReasonSchema: EnumSchema<GiftCardActivityDeactivateReason> =
  s.enumOf<GiftCardActivityDeactivateReason>(GiftCardActivityDeactivateReason);
