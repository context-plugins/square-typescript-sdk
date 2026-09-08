import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

/** A response that includes the loyalty rewards satisfying the search criteria. */
export type SearchLoyaltyRewardsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The loyalty rewards that satisfy the search criteria. These are returned in descending order by
   * `updated_at`.
   */
  rewards?: LoyaltyReward[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   */
  cursor?: string;
};

export const searchLoyaltyRewardsResponseSchema: Schema<SearchLoyaltyRewardsResponse> =
  s.object<SearchLoyaltyRewardsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    rewards: s.optional(s.array(s.lazy(() => loyaltyRewardSchema))),
    cursor: s.optional(s.string()),
  });
