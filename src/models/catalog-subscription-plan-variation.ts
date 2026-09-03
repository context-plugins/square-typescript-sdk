import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionPhaseSchema, type SubscriptionPhase } from "./subscription-phase.js";

export type CatalogSubscriptionPlanVariation = {
  name: string;
  phases: SubscriptionPhase[];
  subscriptionPlanId?: string | null;
  monthlyBillingAnchorDate?: number | null;
  canProrate?: boolean | null;
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
