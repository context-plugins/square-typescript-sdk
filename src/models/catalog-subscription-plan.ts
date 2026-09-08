import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { subscriptionPhaseSchema, type SubscriptionPhase } from "./subscription-phase.js";

/**
 * Describes a subscription plan. A subscription plan represents what you want to sell in a
 * subscription model, and includes references to each of the associated subscription plan
 * variations. For more information, see [Subscription Plans and
 * Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export type CatalogSubscriptionPlan = {
  /** The name of the plan. */
  name: string;
  /**
   * A list of SubscriptionPhase containing the [SubscriptionPhase](entity:SubscriptionPhase) for
   * this plan. This field it required. Not including this field will throw a REQUIRED_FIELD_MISSING
   * error
   */
  phases?: SubscriptionPhase[] | null;
  /** The list of subscription plan variations available for this product */
  subscriptionPlanVariations?: CatalogObject[] | null;
  /**
   * The list of IDs of `CatalogItems` that are eligible for subscription by this SubscriptionPlan's
   * variations.
   */
  eligibleItemIds?: string[] | null;
  /**
   * The list of IDs of `CatalogCategory` that are eligible for subscription by this
   * SubscriptionPlan's variations.
   */
  eligibleCategoryIds?: string[] | null;
  /** If true, all items in the merchant's catalog are subscribable by this SubscriptionPlan. */
  allItems?: boolean | null;
};

export const catalogSubscriptionPlanSchema: Schema<CatalogSubscriptionPlan> =
  s.object<CatalogSubscriptionPlan>({
    name: s.string(),
    phases: s.optionalNullable(s.array(s.lazy(() => subscriptionPhaseSchema))),
    subscriptionPlanVariations: s.optionalNullable(s.array(s.lazy(() => catalogObjectSchema))),
    eligibleItemIds: s.optionalNullable(s.array(s.string())),
    eligibleCategoryIds: s.optionalNullable(s.array(s.string())),
    allItems: s.optionalNullable(s.boolean()),
    _keysMap: {
      subscriptionPlanVariations: "subscription_plan_variations",
      eligibleItemIds: "eligible_item_ids",
      eligibleCategoryIds: "eligible_category_ids",
      allItems: "all_items",
    },
  });
