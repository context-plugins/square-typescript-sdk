import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `REDEEM_REWARD`. */
export type LoyaltyEventRedeemReward = {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /**
   * The ID of the redeemed [loyalty reward](entity:LoyaltyReward). This field is returned only if
   * the event source is `LOYALTY_API`.
   */
  rewardId?: string;
  /**
   * The ID of the [order](entity:Order) that redeemed the reward. This field is returned only if
   * the Orders API is used to process orders.
   */
  orderId?: string;
};

export const loyaltyEventRedeemRewardSchema: Schema<LoyaltyEventRedeemReward> =
  s.object<LoyaltyEventRedeemReward>({
    loyaltyProgramId: s.string(),
    rewardId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      rewardId: "reward_id",
      orderId: "order_id",
    },
  });
