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

/**
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and
 * redeem points for rewards. Square sellers can have only one loyalty program, which is created and
 * managed from the Seller Dashboard. For more information, see [Loyalty Program
 * Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export type LoyaltyProgram = {
  /**
   * The Square-assigned ID of the loyalty program. Updates to the loyalty program do not modify the
   * identifier.
   */
  id?: string;
  /** Indicates whether the program is currently active. */
  status?: LoyaltyProgramStatus;
  /** The list of rewards for buyers, sorted by ascending points. */
  rewardTiers?: LoyaltyProgramRewardTier[] | null;
  /** Describes when the loyalty program expires. */
  expirationPolicy?: LoyaltyProgramExpirationPolicy;
  /** Represents the naming used for loyalty points. */
  terminology?: LoyaltyProgramTerminology;
  /** The [locations](entity:Location) at which the program is active. */
  locationIds?: string[] | null;
  /** The timestamp when the program was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the reward was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Defines how buyers can earn loyalty points from the base loyalty program. To check for
   * associated [loyalty promotions](entity:LoyaltyPromotion) that enable buyers to earn extra
   * points, call [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions).
   */
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
