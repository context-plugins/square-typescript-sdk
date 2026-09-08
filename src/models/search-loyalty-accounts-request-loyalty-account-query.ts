import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountMappingSchema, type LoyaltyAccountMapping } from "./loyalty-account-mapping.js";

/** The search criteria for the loyalty accounts. */
export type SearchLoyaltyAccountsRequestLoyaltyAccountQuery = {
  /**
   * The set of mappings to use in the loyalty account search.
   *
   * This cannot be combined with `customer_ids`.
   *
   * Max: 30 mappings
   */
  mappings?: LoyaltyAccountMapping[] | null;
  /**
   * The set of customer IDs to use in the loyalty account search.
   *
   * This cannot be combined with `mappings`.
   *
   * Max: 30 customer IDs
   */
  customerIds?: string[] | null;
};

export const searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema: Schema<SearchLoyaltyAccountsRequestLoyaltyAccountQuery> =
  s.object<SearchLoyaltyAccountsRequestLoyaltyAccountQuery>({
    mappings: s.optionalNullable(s.array(s.lazy(() => loyaltyAccountMappingSchema))),
    customerIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
