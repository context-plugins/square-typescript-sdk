import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramAccrualRuleSchema,
  type LoyaltyProgramAccrualRule,
} from "./loyalty-program-accrual-rule.js";
import {
  loyaltyProgramExpirationPolicySchema,
  type LoyaltyProgramExpirationPolicy,
} from "./loyalty-program-expiration-policy.js";
import {
  loyaltyProgramRewardTierSchema,
  type LoyaltyProgramRewardTier,
} from "./loyalty-program-reward-tier.js";
import { loyaltyProgramStatusSchema, type LoyaltyProgramStatus } from "./loyalty-program-status.js";
import {
  loyaltyProgramTerminologySchema,
  type LoyaltyProgramTerminology,
} from "./loyalty-program-terminology.js";

export type LoyaltyProgram = {
  id?: string;
  status?: LoyaltyProgramStatus;
  rewardTiers?: LoyaltyProgramRewardTier[] | null;
  expirationPolicy?: LoyaltyProgramExpirationPolicy;
  terminology?: LoyaltyProgramTerminology;
  locationIds?: string[] | null;
  createdAt?: string;
  updatedAt?: string;
  accrualRules?: LoyaltyProgramAccrualRule[] | null;
};

export const loyaltyProgramSchema: Schema<LoyaltyProgram> = s.object<LoyaltyProgram>({
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => loyaltyProgramStatusSchema)),
  rewardTiers: s.optionalNullable(s.array(s.lazy(() => loyaltyProgramRewardTierSchema))),
  expirationPolicy: s.optional(s.lazy(() => loyaltyProgramExpirationPolicySchema)),
  terminology: s.optional(s.lazy(() => loyaltyProgramTerminologySchema)),
  locationIds: s.optionalNullable(s.array(s.string())),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  accrualRules: s.optionalNullable(s.array(s.lazy(() => loyaltyProgramAccrualRuleSchema))),
  _keysMap: {
    rewardTiers: "reward_tiers",
    expirationPolicy: "expiration_policy",
    locationIds: "location_ids",
    createdAt: "created_at",
    updatedAt: "updated_at",
    accrualRules: "accrual_rules",
  },
});
