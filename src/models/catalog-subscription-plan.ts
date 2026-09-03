import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { subscriptionPhaseSchema, type SubscriptionPhase } from "./subscription-phase.js";

export type CatalogSubscriptionPlan = {
  name: string;
  phases?: SubscriptionPhase[] | null;
  subscriptionPlanVariations?: CatalogObject[] | null;
  eligibleItemIds?: string[] | null;
  eligibleCategoryIds?: string[] | null;
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
