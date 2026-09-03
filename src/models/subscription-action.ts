import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionActionTypeSchema, type SubscriptionActionType } from "./subscription-action-type.js";

export type SubscriptionAction = {
  id?: string;
  type?: SubscriptionActionType;
  effectiveDate?: string | null;
  monthlyBillingAnchorDate?: number | null;
  phases?: Phase[] | null;
  newPlanVariationId?: string | null;
};

export const subscriptionActionSchema: Schema<SubscriptionAction> = s.object<SubscriptionAction>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => subscriptionActionTypeSchema)),
  effectiveDate: s.optionalNullable(s.string()),
  monthlyBillingAnchorDate: s.optionalNullable(s.number()),
  phases: s.optionalNullable(s.array(s.lazy(() => phaseSchema))),
  newPlanVariationId: s.optionalNullable(s.string()),
  _keysMap: {
    effectiveDate: "effective_date",
    monthlyBillingAnchorDate: "monthly_billing_anchor_date",
    newPlanVariationId: "new_plan_variation_id",
  },
});
