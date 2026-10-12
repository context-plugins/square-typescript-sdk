import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema,
  type SearchLoyaltyAccountsRequestLoyaltyAccountQuery,
} from "./search-loyalty-accounts-request-loyalty-account-query.js";

/** A request to search for loyalty accounts. */
export type SearchLoyaltyAccountsRequest = {
  /** The search criteria for the loyalty accounts. */
  query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
  /** The maximum number of results to include in the response. The default value is 30. */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the
   * next set of results for the original query.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchLoyaltyAccountsRequestSchema: Schema<SearchLoyaltyAccountsRequest> =
  s.object<SearchLoyaltyAccountsRequest>({
    query: s.optional(s.lazy(() => searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema)),
    limit: s.optional(s.int()),
    cursor: s.optional(s.string()),
  });
