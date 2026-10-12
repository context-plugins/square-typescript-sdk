import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `DELETE_REWARD`. */
export type LoyaltyEventDeleteReward = {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /**
   * The ID of the deleted [loyalty reward](entity:LoyaltyReward). This field is returned only if
   * the event source is `LOYALTY_API`.
   */
  rewardId?: string;
  /** The number of points returned to the loyalty account. */
  points: number;
};

export const loyaltyEventDeleteRewardSchema: Schema<LoyaltyEventDeleteReward> =
  s.object<LoyaltyEventDeleteReward>({
    loyaltyProgramId: s.string(),
    rewardId: s.optional(s.string()),
    points: s.int(),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      rewardId: "reward_id",
    },
  });
