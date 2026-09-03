import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountMappingSchema, type LoyaltyAccountMapping } from "./loyalty-account-mapping.js";

export type SearchLoyaltyAccountsRequestLoyaltyAccountQuery = {
  mappings?: LoyaltyAccountMapping[] | null;
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
