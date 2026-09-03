import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkSwapPlanRequest = {
  newPlanVariationId: string;
  oldPlanVariationId: string;
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
