import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type LoyaltyAccountDeletedEventObject = {
  /**
   * Describes a loyalty account in a [loyalty program](entity:LoyaltyProgram). For more
   * information, see [Create and Retrieve Loyalty
   * Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
   */
  loyaltyAccount?: LoyaltyAccount;
};

export const loyaltyAccountDeletedEventObjectSchema: Schema<LoyaltyAccountDeletedEventObject> =
  s.object<LoyaltyAccountDeletedEventObject>({
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
