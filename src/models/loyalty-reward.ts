import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardStatusSchema, type LoyaltyRewardStatus } from "./loyalty-reward-status.js";

/**
 * Represents a contract to redeem loyalty points for a [reward
 * tier](entity:LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED,
 * or DELETED state. For more information, see [Manage loyalty
 * rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
 */
export type LoyaltyReward = {
  /** The Square-assigned ID of the loyalty reward. */
  id?: string;
  /** The status of the loyalty reward. */
  status?: LoyaltyRewardStatus;
  /**
   * The Square-assigned ID of the [loyalty account](entity:LoyaltyAccount) to which the reward
   * belongs.
   */
  loyaltyAccountId: string;
  /**
   * The Square-assigned ID of the [reward tier](entity:LoyaltyProgramRewardTier) used to create the
   * reward.
   */
  rewardTierId: string;
  /** The number of loyalty points used for the reward. */
  points?: number;
  /** The Square-assigned ID of the [order](entity:Order) to which the reward is attached. */
  orderId?: string | null;
  /** The timestamp when the reward was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the reward was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** The timestamp when the reward was redeemed, in RFC 3339 format. */
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
