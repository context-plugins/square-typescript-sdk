import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardStatusSchema, type LoyaltyRewardStatus } from "./loyalty-reward-status.js";

export type LoyaltyReward = {
  id?: string;
  status?: LoyaltyRewardStatus;
  loyaltyAccountId: string;
  rewardTierId: string;
  points?: number;
  orderId?: string | null;
  createdAt?: string;
  updatedAt?: string;
  redeemedAt?: string;
};

export const loyaltyRewardSchema: Schema<LoyaltyReward> = s.object<LoyaltyReward>({
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => loyaltyRewardStatusSchema)),
  loyaltyAccountId: s.string(),
  rewardTierId: s.string(),
  points: s.optional(s.number()),
  orderId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  redeemedAt: s.optional(s.string()),
  _keysMap: {
    loyaltyAccountId: "loyalty_account_id",
    rewardTierId: "reward_tier_id",
    orderId: "order_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    redeemedAt: "redeemed_at",
  },
});
