import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardStatusSchema, type LoyaltyRewardStatus } from "./loyalty-reward-status.js";

/** The set of search requirements. */
export type SearchLoyaltyRewardsRequestLoyaltyRewardQuery = {
  /** The ID of the [loyalty account](entity:LoyaltyAccount) to which the loyalty reward belongs. */
  loyaltyAccountId: string;
  /** The status of the loyalty reward. */
  status?: LoyaltyRewardStatus;
};

export const searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema: Schema<SearchLoyaltyRewardsRequestLoyaltyRewardQuery> =
  s.object<SearchLoyaltyRewardsRequestLoyaltyRewardQuery>({
    loyaltyAccountId: s.string(),
    status: s.optional(s.lazy(() => loyaltyRewardStatusSchema)),
    _keysMap: {
      loyaltyAccountId: "loyalty_account_id",
    },
  });
