import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionTriggerLimitIntervalSchema,
  type LoyaltyPromotionTriggerLimitInterval,
} from "./loyalty-promotion-trigger-limit-interval.js";

/**
 * Represents the number of times a buyer can earn points during a [loyalty
 * promotion](entity:LoyaltyPromotion). If this field is not set, buyers can trigger the promotion
 * an unlimited number of times to earn points during the time that the promotion is available.
 *
 * A purchase that is disqualified from earning points because of this limit might qualify for
 * another active promotion.
 */
export type LoyaltyPromotionTriggerLimit = {
  /**
   * The maximum number of times a buyer can trigger the promotion during the specified `interval`.
   */
  times: number;
  /**
   * Indicates the time period that the [trigger limit](entity:LoyaltyPromotionTriggerLimit) applies
   * to, which is used to determine the number of times a buyer can earn points for a [loyalty
   * promotion](entity:LoyaltyPromotion).
   */
  interval?: LoyaltyPromotionTriggerLimitInterval;
};

export const loyaltyPromotionTriggerLimitSchema: Schema<LoyaltyPromotionTriggerLimit> =
  s.object<LoyaltyPromotionTriggerLimit>({
    times: s.number(),
    interval: s.optional(s.lazy(() => loyaltyPromotionTriggerLimitIntervalSchema)),
  });
