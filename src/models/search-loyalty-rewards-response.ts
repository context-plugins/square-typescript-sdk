import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

export type SearchLoyaltyRewardsResponse = {
  errors?: Error[];
  rewards?: LoyaltyReward[];
  cursor?: string;
};

export const searchLoyaltyRewardsResponseSchema: Schema<SearchLoyaltyRewardsResponse> =
  s.object<SearchLoyaltyRewardsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    rewards: s.optional(s.array(s.lazy(() => loyaltyRewardSchema))),
    cursor: s.optional(s.string()),
  });
