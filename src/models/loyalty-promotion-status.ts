import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyPromotionStatus = {
  Active: "ACTIVE",
  Ended: "ENDED",
  Canceled: "CANCELED",
  Scheduled: "SCHEDULED",
} as const;
export type LoyaltyPromotionStatus =
  | (typeof LoyaltyPromotionStatus)[keyof typeof LoyaltyPromotionStatus]
  | (string & {});

export const loyaltyPromotionStatusSchema: EnumSchema<LoyaltyPromotionStatus> =
  s.enumOf<LoyaltyPromotionStatus>(LoyaltyPromotionStatus);
