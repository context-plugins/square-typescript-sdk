import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseInputSchema, type PhaseInput } from "./phase-input.js";

/**
 * Defines input parameters in a call to the [SwapPlan](api-endpoint:Subscriptions-SwapPlan)
 * endpoint.
 */
export type SwapPlanRequest = {
  /**
   * The ID of the new subscription plan variation.
   *
   * This field is required.
   */
  newPlanVariationId?: string | null;
  /** A list of PhaseInputs, to pass phase-specific information used in the swap. */
  phases?: PhaseInput[] | null;
};

export const swapPlanRequestSchema: Schema<SwapPlanRequest> = s.object<SwapPlanRequest>({
  newPlanVariationId: s.optionalNullable(s.string()),
  phases: s.optionalNullable(s.array(s.lazy(() => phaseInputSchema))),
  _keysMap: {
    newPlanVariationId: "new_plan_variation_id",
  },
});
