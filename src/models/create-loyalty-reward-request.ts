import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyRewardSchema, type LoyaltyReward } from "./loyalty-reward.js";

export type CreateLoyaltyRewardRequest = {
  reward: LoyaltyReward;
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
