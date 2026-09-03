import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventCreateReward = {
  loyaltyProgramId: string;
  rewardId?: string;
  points: number;
};

export const loyaltyEventCreateRewardSchema: Schema<LoyaltyEventCreateReward> =
  s.object<LoyaltyEventCreateReward>({
    loyaltyProgramId: s.string(),
    rewardId: s.optional(s.string()),
    points: s.number(),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      rewardId: "reward_id",
    },
  });
