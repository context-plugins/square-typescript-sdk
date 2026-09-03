import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema,
  type SearchLoyaltyRewardsRequestLoyaltyRewardQuery,
} from "./search-loyalty-rewards-request-loyalty-reward-query.js";

export type SearchLoyaltyRewardsRequest = {
  query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
  limit?: number;
  cursor?: string;
};

export const searchLoyaltyRewardsRequestSchema: Schema<SearchLoyaltyRewardsRequest> =
  s.object<SearchLoyaltyRewardsRequest>({
    query: s.optional(s.lazy(() => searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
