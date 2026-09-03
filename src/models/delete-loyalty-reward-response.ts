import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteLoyaltyRewardResponse = {
  errors?: Error[];
};

export const deleteLoyaltyRewardResponseSchema: Schema<DeleteLoyaltyRewardResponse> =
  s.object<DeleteLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
