import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

/** A response that includes the loyalty account. */
export type RetrieveLoyaltyAccountResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Describes a loyalty account in a [loyalty program](entity:LoyaltyProgram). For more
   * information, see [Create and Retrieve Loyalty
   * Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
   */
  loyaltyAccount?: LoyaltyAccount;
};

export const retrieveLoyaltyAccountResponseSchema: Schema<RetrieveLoyaltyAccountResponse> =
  s.object<RetrieveLoyaltyAccountResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
