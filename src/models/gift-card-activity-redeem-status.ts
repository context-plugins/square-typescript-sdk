import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardActivityRedeemStatus = {
  Pending: "PENDING",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
} as const;
export type GiftCardActivityRedeemStatus =
  | (typeof GiftCardActivityRedeemStatus)[keyof typeof GiftCardActivityRedeemStatus]
  | (string & {});

export const giftCardActivityRedeemStatusSchema: EnumSchema<GiftCardActivityRedeemStatus> =
  s.enumOf<GiftCardActivityRedeemStatus>(GiftCardActivityRedeemStatus);
