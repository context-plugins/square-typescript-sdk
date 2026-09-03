import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionTriggerLimitIntervalSchema,
  type LoyaltyPromotionTriggerLimitInterval,
} from "./loyalty-promotion-trigger-limit-interval.js";

export type LoyaltyPromotionTriggerLimit = {
  times: number;
  interval?: LoyaltyPromotionTriggerLimitInterval;
};

export const loyaltyPromotionTriggerLimitSchema: Schema<LoyaltyPromotionTriggerLimit> =
  s.object<LoyaltyPromotionTriggerLimit>({
    times: s.number(),
    interval: s.optional(s.lazy(() => loyaltyPromotionTriggerLimitIntervalSchema)),
  });
