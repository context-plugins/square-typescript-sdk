import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BulkSwapPlanResponse = {
  errors?: Error[];
  affectedSubscriptions?: number;
};

export const bulkSwapPlanResponseSchema: Schema<BulkSwapPlanResponse> = s.object<BulkSwapPlanResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  affectedSubscriptions: s.optional(s.number()),
  _keysMap: {
    affectedSubscriptions: "affected_subscriptions",
  },
});
