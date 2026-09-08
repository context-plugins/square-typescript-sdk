import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines output parameters in a response of the
 * [BulkSwapPlan](api-endpoint:Subscriptions-BulkSwapPlan) endpoint.
 */
export type BulkSwapPlanResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The number of affected subscriptions. */
  affectedSubscriptions?: number;
};

export const bulkSwapPlanResponseSchema: Schema<BulkSwapPlanResponse> = s.object<BulkSwapPlanResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  affectedSubscriptions: s.optional(s.number()),
  _keysMap: {
    affectedSubscriptions: "affected_subscriptions",
  },
});
