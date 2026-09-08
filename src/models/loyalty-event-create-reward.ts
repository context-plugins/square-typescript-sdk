import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `CREATE_REWARD`. */
export type LoyaltyEventCreateReward = {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /**
   * The Square-assigned ID of the created [loyalty reward](entity:LoyaltyReward). This field is
   * returned only if the event source is `LOYALTY_API`.
   */
  rewardId?: string;
  /** The loyalty points used to create the reward. */
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
