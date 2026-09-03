import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventRedeemReward = {
  loyaltyProgramId: string;
  rewardId?: string;
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
