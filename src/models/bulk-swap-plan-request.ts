import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines input parameters in a call to the [BulkSwapPlan](api-endpoint:Subscriptions-BulkSwapPlan)
 * endpoint.
 */
export type BulkSwapPlanRequest = {
  /**
   * The ID of the new subscription plan variation.
   *
   * This field is required.
   */
  newPlanVariationId: string;
  /**
   * The ID of the plan variation whose subscriptions should be swapped. Active subscriptions using
   * this plan variation will be subscribed to the new plan variation on their next billing day.
   */
  oldPlanVariationId: string;
  /** The ID of the location to associate with the swapped subscriptions. */
  locationId: string;
};

export const bulkSwapPlanRequestSchema: Schema<BulkSwapPlanRequest> = s.object<BulkSwapPlanRequest>({
  newPlanVariationId: s.string(),
  oldPlanVariationId: s.string(),
  locationId: s.string(),
  _keysMap: {
    newPlanVariationId: "new_plan_variation_id",
    oldPlanVariationId: "old_plan_variation_id",
    locationId: "location_id",
  },
});
