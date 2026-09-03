import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema,
  type SearchLoyaltyAccountsRequestLoyaltyAccountQuery,
} from "./search-loyalty-accounts-request-loyalty-account-query.js";

export type SearchLoyaltyAccountsRequest = {
  query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
  limit?: number;
  cursor?: string;
};

export const searchLoyaltyAccountsRequestSchema: Schema<SearchLoyaltyAccountsRequest> =
  s.object<SearchLoyaltyAccountsRequest>({
    query: s.optional(s.lazy(() => searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
