import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardStatusSchema, type LoyaltyRewardStatus } from "./loyalty-reward-status.js";

export type SearchLoyaltyRewardsRequestLoyaltyRewardQuery = {
  loyaltyAccountId: string;
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
