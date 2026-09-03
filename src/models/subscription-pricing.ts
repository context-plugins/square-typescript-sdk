import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { subscriptionPricingTypeSchema, type SubscriptionPricingType } from "./subscription-pricing-type.js";

export type SubscriptionPricing = {
  type?: SubscriptionPricingType;
  discountIds?: string[] | null;
  priceMoney?: Money;
};

export const subscriptionPricingSchema: Schema<SubscriptionPricing> = s.object<SubscriptionPricing>({
  type: s.optional(s.lazy(() => subscriptionPricingTypeSchema)),
  discountIds: s.optionalNullable(s.array(s.string())),
  priceMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    discountIds: "discount_ids",
    priceMoney: "price_money",
  },
});
