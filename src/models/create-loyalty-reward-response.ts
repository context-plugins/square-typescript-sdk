import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

/** A response that includes the loyalty reward created. */
export type CreateLoyaltyRewardResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a contract to redeem loyalty points for a [reward
   * tier](entity:LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED,
   * or DELETED state. For more information, see [Manage loyalty
   * rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
   */
  reward?: LoyaltyReward;
};

export const createLoyaltyRewardResponseSchema: Schema<CreateLoyaltyRewardResponse> =
  s.object<CreateLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    reward: s.optional(s.lazy(() => loyaltyRewardSchema)),
  });
