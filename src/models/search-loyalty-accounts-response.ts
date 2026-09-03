import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type SearchLoyaltyAccountsResponse = {
  errors?: Error[];
  loyaltyAccounts?: LoyaltyAccount[];
  cursor?: string;
};

export const searchLoyaltyAccountsResponseSchema: Schema<SearchLoyaltyAccountsResponse> =
  s.object<SearchLoyaltyAccountsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyAccounts: s.optional(s.array(s.lazy(() => loyaltyAccountSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      loyaltyAccounts: "loyalty_accounts",
    },
  });
