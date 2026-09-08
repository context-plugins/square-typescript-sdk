import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the gift card state. */
export const GiftCardStatus = {
  /** The gift card is active and can be used as a payment source. */
  Active: "ACTIVE",
  /** Any activity that changes the gift card balance is permanently forbidden. */
  Deactivated: "DEACTIVATED",
  /** Any activity that changes the gift card balance is temporarily forbidden. */
  Blocked: "BLOCKED",
  /**
   * The gift card is pending activation. This is the initial state when a gift card is created.
   * Typically, you'll call
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) to create an
   * `ACTIVATE` activity that activates the gift card with an initial balance before first use.
   */
  Pending: "PENDING",
} as const;
export type GiftCardStatus = (typeof GiftCardStatus)[keyof typeof GiftCardStatus] | (string & {});

export const giftCardStatusSchema: EnumSchema<GiftCardStatus> = s.enumOf<GiftCardStatus>(GiftCardStatus);
