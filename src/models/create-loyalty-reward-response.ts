import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

export type CreateLoyaltyRewardResponse = {
  errors?: Error[];
  reward?: LoyaltyReward;
};

export const createLoyaltyRewardResponseSchema: Schema<CreateLoyaltyRewardResponse> =
  s.object<CreateLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    reward: s.optional(s.lazy(() => loyaltyRewardSchema)),
  });
