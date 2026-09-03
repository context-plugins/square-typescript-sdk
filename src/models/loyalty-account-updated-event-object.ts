import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type LoyaltyAccountUpdatedEventObject = {
  loyaltyAccount?: LoyaltyAccount;
};

export const loyaltyAccountUpdatedEventObjectSchema: Schema<LoyaltyAccountUpdatedEventObject> =
  s.object<LoyaltyAccountUpdatedEventObject>({
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
