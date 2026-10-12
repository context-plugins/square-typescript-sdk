import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseSchema, type Phase } from "./phase.js";
import { subscriptionActionTypeSchema, type SubscriptionActionType } from "./subscription-action-type.js";

/** Represents an action as a pending change to a subscription. */
export type SubscriptionAction = {
  /** The ID of an action scoped to a subscription. */
  id?: string;
  /** Supported types of an action as a pending change to a subscription. */
  type?: SubscriptionActionType;
  /** The `YYYY-MM-DD`-formatted date when the action occurs on the subscription. */
  effectiveDate?: string | null;
  /** The new billing anchor day value, for a `CHANGE_BILLING_ANCHOR_DATE` action. */
  monthlyBillingAnchorDate?: number | null;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Phase[] | null;
  /**
   * The target subscription plan variation that a subscription switches to, for a `SWAP_PLAN`
   * action.
   */
  newPlanVariationId?: string | null;
};

export const subscriptionActionSchema: Schema<SubscriptionAction> = s.object<SubscriptionAction>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => subscriptionActionTypeSchema)),
  effectiveDate: s.optionalNullable(s.string()),
  monthlyBillingAnchorDate: s.optionalNullable(s.int()),
  phases: s.optionalNullable(s.array(s.lazy(() => phaseSchema))),
  newPlanVariationId: s.optionalNullable(s.string()),
  _keysMap: {
    effectiveDate: "effective_date",
    monthlyBillingAnchorDate: "monthly_billing_anchor_date",
    newPlanVariationId: "new_plan_variation_id",
  },
});
