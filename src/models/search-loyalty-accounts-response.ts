import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

/** A response that includes loyalty accounts that satisfy the search criteria. */
export type SearchLoyaltyAccountsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The loyalty accounts that met the search criteria, in order of creation date. */
  loyaltyAccounts?: LoyaltyAccount[];
  /**
   * The pagination cursor to use in a subsequent request. If empty, this is the final response. For
   * more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
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
