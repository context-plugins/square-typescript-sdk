import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { subscriptionCadenceSchema, type SubscriptionCadence } from "./subscription-cadence.js";
import { subscriptionPricingSchema, type SubscriptionPricing } from "./subscription-pricing.js";

export type SubscriptionPhase = {
  uid?: string | null;
  cadence: SubscriptionCadence;
  periods?: number | null;
  recurringPriceMoney?: Money;
  ordinal?: number | null;
  pricing?: SubscriptionPricing;
};

export const subscriptionPhaseSchema: Schema<SubscriptionPhase> = s.object<SubscriptionPhase>({
  uid: s.optionalNullable(s.string()),
  cadence: subscriptionCadenceSchema,
  periods: s.optionalNullable(s.number()),
  recurringPriceMoney: s.optional(s.lazy(() => moneySchema)),
  ordinal: s.optionalNullable(s.number()),
  pricing: s.optional(s.lazy(() => subscriptionPricingSchema)),
  _keysMap: {
    recurringPriceMoney: "recurring_price_money",
  },
});
