import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyPromotionTriggerLimitInterval = {
  AllTime: "ALL_TIME",
  Day: "DAY",
} as const;
export type LoyaltyPromotionTriggerLimitInterval =
  | (typeof LoyaltyPromotionTriggerLimitInterval)[keyof typeof LoyaltyPromotionTriggerLimitInterval]
  | (string & {});

export const loyaltyPromotionTriggerLimitIntervalSchema: EnumSchema<LoyaltyPromotionTriggerLimitInterval> =
  s.enumOf<LoyaltyPromotionTriggerLimitInterval>(LoyaltyPromotionTriggerLimitInterval);
