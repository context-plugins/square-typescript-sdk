import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { subscriptionCadenceSchema, type SubscriptionCadence } from "./subscription-cadence.js";
import { subscriptionPricingSchema, type SubscriptionPricing } from "./subscription-pricing.js";

/**
 * Describes a phase in a subscription plan variation. For more information, see [Subscription Plans
 * and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export type SubscriptionPhase = {
  /**
   * The Square-assigned ID of the subscription phase. This field cannot be changed after a
   * `SubscriptionPhase` is created.
   */
  uid?: string | null;
  /** Determines the billing cadence of a [Subscription](entity:Subscription) */
  cadence: SubscriptionCadence;
  /**
   * The number of `cadence`s the phase lasts. If not set, the phase never ends. Only the last phase
   * can be indefinite. This field cannot be changed after a `SubscriptionPhase` is created.
   */
  periods?: number | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  recurringPriceMoney?: Money;
  /**
   * The position this phase appears in the sequence of phases defined for the plan, indexed from 0.
   * This field cannot be changed after a `SubscriptionPhase` is created.
   */
  ordinal?: number | null;
  /** Describes the pricing for the subscription. */
  pricing?: SubscriptionPricing;
};

export const subscriptionPhaseSchema: Schema<SubscriptionPhase> = s.object<SubscriptionPhase>({
  uid: s.optionalNullable(s.string()),
  cadence: subscriptionCadenceSchema,
  periods: s.optionalNullable(s.int()),
  recurringPriceMoney: s.optional(s.lazy(() => moneySchema)),
  ordinal: s.optionalNullable(s.int()),
  pricing: s.optional(s.lazy(() => subscriptionPricingSchema)),
  _keysMap: {
    recurringPriceMoney: "recurring_price_money",
  },
});
