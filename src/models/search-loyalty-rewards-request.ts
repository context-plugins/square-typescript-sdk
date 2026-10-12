import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema,
  type SearchLoyaltyRewardsRequestLoyaltyRewardQuery,
} from "./search-loyalty-rewards-request-loyalty-reward-query.js";

/** A request to search for loyalty rewards. */
export type SearchLoyaltyRewardsRequest = {
  /** The set of search requirements. */
  query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
  /** The maximum number of results to return in the response. The default value is 30. */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the
   * next set of results for the original query. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchLoyaltyRewardsRequestSchema: Schema<SearchLoyaltyRewardsRequest> =
  s.object<SearchLoyaltyRewardsRequest>({
    query: s.optional(s.lazy(() => searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema)),
    limit: s.optional(s.int()),
    cursor: s.optional(s.string()),
  });
