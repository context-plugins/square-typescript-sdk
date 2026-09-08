import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the status of a [gift card](entity:GiftCard) redemption. This status is relevant only
 * for redemptions made from Square products (such as Square Point of Sale) because Square products
 * use a two-state process. Gift cards redeemed using the Gift Card Activities API always have a
 * `COMPLETED` status.
 */
export const GiftCardActivityRedeemStatus = {
  /**
   * The gift card redemption is pending. `PENDING` is a temporary status that applies when a gift
   * card is redeemed from Square Point of Sale or another Square product. A `PENDING` status is
   * updated to `COMPLETED` if the payment is captured or `CANCELED` if the authorization is voided.
   */
  Pending: "PENDING",
  /** The gift card redemption is completed. */
  Completed: "COMPLETED",
  /**
   * The gift card redemption is canceled. A redemption is canceled if the authorization on the gift
   * card is voided.
   */
  Canceled: "CANCELED",
} as const;
export type GiftCardActivityRedeemStatus =
  | (typeof GiftCardActivityRedeemStatus)[keyof typeof GiftCardActivityRedeemStatus]
  | (string & {});

export const giftCardActivityRedeemStatusSchema: EnumSchema<GiftCardActivityRedeemStatus> =
  s.enumOf<GiftCardActivityRedeemStatus>(GiftCardActivityRedeemStatus);
