import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { subscriptionPricingTypeSchema, type SubscriptionPricingType } from "./subscription-pricing-type.js";

/** Describes the pricing for the subscription. */
export type SubscriptionPricing = {
  /** Determines the pricing of a [Subscription](entity:Subscription) */
  type?: SubscriptionPricingType;
  /** The ids of the discount catalog objects */
  discountIds?: string[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
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
