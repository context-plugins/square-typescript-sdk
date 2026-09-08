import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionPhaseSchema, type SubscriptionPhase } from "./subscription-phase.js";

/**
 * Describes a subscription plan variation. A subscription plan variation represents how the
 * subscription for a product or service is sold. For more information, see [Subscription Plans and
 * Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export type CatalogSubscriptionPlanVariation = {
  /** The name of the plan variation. */
  name: string;
  /**
   * A list containing each [SubscriptionPhase](entity:SubscriptionPhase) for this plan variation.
   */
  phases: SubscriptionPhase[];
  /** The id of the subscription plan, if there is one. */
  subscriptionPlanId?: string | null;
  /** The day of the month the billing period starts. */
  monthlyBillingAnchorDate?: number | null;
  /** Whether bills for this plan variation can be split for proration. */
  canProrate?: boolean | null;
  /**
   * The ID of a "successor" plan variation to this one. If the field is set, and this object is
   * disabled at all locations, it indicates that this variation is deprecated and the object
   * identified by the successor ID be used in its stead.
   */
  successorPlanVariationId?: string | null;
};

export const catalogSubscriptionPlanVariationSchema: Schema<CatalogSubscriptionPlanVariation> =
  s.object<CatalogSubscriptionPlanVariation>({
    name: s.string(),
    phases: s.array(s.lazy(() => subscriptionPhaseSchema)),
    subscriptionPlanId: s.optionalNullable(s.string()),
    monthlyBillingAnchorDate: s.optionalNullable(s.number()),
    canProrate: s.optionalNullable(s.boolean()),
    successorPlanVariationId: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionPlanId: "subscription_plan_id",
      monthlyBillingAnchorDate: "monthly_billing_anchor_date",
      canProrate: "can_prorate",
      successorPlanVariationId: "successor_plan_variation_id",
    },
  });
