import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

/** A request to create a loyalty reward. */
export type CreateLoyaltyRewardRequest = {
  /**
   * Represents a contract to redeem loyalty points for a [reward
   * tier](entity:LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED,
   * or DELETED state. For more information, see [Manage loyalty
   * rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
   */
  reward: LoyaltyReward;
  /**
   * A unique string that identifies this `CreateLoyaltyReward` request. Keys can be any valid
   * string, but must be unique for every request.
   */
  idempotencyKey: string;
};

export const createLoyaltyRewardRequestSchema: Schema<CreateLoyaltyRewardRequest> =
  s.object<CreateLoyaltyRewardRequest>({
    reward: loyaltyRewardSchema,
    idempotencyKey: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
