import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a reward that can be applied to an order if the necessary reward tier criteria are
 * met. Rewards are created through the Loyalty API.
 */
export type OrderReward = {
  /** The identifier of the reward. */
  id: string;
  /** The identifier of the reward tier corresponding to this reward. */
  rewardTierId: string;
};

export const orderRewardSchema: Schema<OrderReward> = s.object<OrderReward>({
  id: s.string(),
  rewardTierId: s.string(),
  _keysMap: {
    rewardTierId: "reward_tier_id",
  },
});
