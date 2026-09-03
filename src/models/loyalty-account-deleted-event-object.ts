import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type LoyaltyAccountDeletedEventObject = {
  loyaltyAccount?: LoyaltyAccount;
};

export const loyaltyAccountDeletedEventObjectSchema: Schema<LoyaltyAccountDeletedEventObject> =
  s.object<LoyaltyAccountDeletedEventObject>({
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
