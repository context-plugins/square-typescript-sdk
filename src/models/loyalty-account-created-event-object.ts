import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type LoyaltyAccountCreatedEventObject = {
  loyaltyAccount?: LoyaltyAccount;
};

export const loyaltyAccountCreatedEventObjectSchema: Schema<LoyaltyAccountCreatedEventObject> =
  s.object<LoyaltyAccountCreatedEventObject>({
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
