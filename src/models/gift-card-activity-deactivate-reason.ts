import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the reason for deactivating a [gift card](entity:GiftCard). */
export const GiftCardActivityDeactivateReason = {
  /** The seller suspects suspicious activity. */
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  /**
   * The gift card was deactivated for an unknown reason.
   *
   * This reason is read-only and cannot be used to create a `DEACTIVATE` activity using the Gift
   * Card Activities API.
   */
  UnknownReason: "UNKNOWN_REASON",
  /**
   * A chargeback on the gift card purchase (or the gift card load) was ruled in favor of the buyer.
   *
   * This reason is read-only and cannot be used to create a `DEACTIVATE` activity using the Gift
   * Card Activities API.
   */
  ChargebackDeactivate: "CHARGEBACK_DEACTIVATE",
} as const;
export type GiftCardActivityDeactivateReason =
  | (typeof GiftCardActivityDeactivateReason)[keyof typeof GiftCardActivityDeactivateReason]
  | (string & {});

export const giftCardActivityDeactivateReasonSchema: EnumSchema<GiftCardActivityDeactivateReason> =
  s.enumOf<GiftCardActivityDeactivateReason>(GiftCardActivityDeactivateReason);
