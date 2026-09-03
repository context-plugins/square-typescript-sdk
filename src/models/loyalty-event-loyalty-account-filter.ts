import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventLoyaltyAccountFilter = {
  loyaltyAccountId: string;
};

export const loyaltyEventLoyaltyAccountFilterSchema: Schema<LoyaltyEventLoyaltyAccountFilter> =
  s.object<LoyaltyEventLoyaltyAccountFilter>({
    loyaltyAccountId: s.string(),
    _keysMap: {
      loyaltyAccountId: "loyalty_account_id",
    },
  });
