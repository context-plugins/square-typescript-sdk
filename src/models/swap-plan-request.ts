import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phaseInputSchema, type PhaseInput } from "./phase-input.js";

export type SwapPlanRequest = {
  newPlanVariationId?: string | null;
  phases?: PhaseInput[] | null;
};

export const swapPlanRequestSchema: Schema<SwapPlanRequest> = s.object<SwapPlanRequest>({
  newPlanVariationId: s.optionalNullable(s.string()),
  phases: s.optionalNullable(s.array(s.lazy(() => phaseInputSchema))),
  _keysMap: {
    newPlanVariationId: "new_plan_variation_id",
  },
});
