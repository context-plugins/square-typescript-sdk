import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderReward = {
  id: string;
  rewardTierId: string;
};

export const orderRewardSchema: Schema<OrderReward> = s.object<OrderReward>({
  id: s.string(),
  rewardTierId: s.string(),
  _keysMap: {
    rewardTierId: "reward_tier_id",
  },
});
