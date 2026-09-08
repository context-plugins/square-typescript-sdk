import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filter events by loyalty account. */
export type LoyaltyEventLoyaltyAccountFilter = {
  /** The ID of the [loyalty account](entity:LoyaltyAccount) associated with loyalty events. */
  loyaltyAccountId: string;
};

export const loyaltyEventLoyaltyAccountFilterSchema: Schema<LoyaltyEventLoyaltyAccountFilter> =
  s.object<LoyaltyEventLoyaltyAccountFilter>({
    loyaltyAccountId: s.string(),
    _keysMap: {
      loyaltyAccountId: "loyalty_account_id",
    },
  });
