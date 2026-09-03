import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyProgramAccrualRuleType = {
  Visit: "VISIT",
  Spend: "SPEND",
  ItemVariation: "ITEM_VARIATION",
  Category: "CATEGORY",
} as const;
export type LoyaltyProgramAccrualRuleType =
  | (typeof LoyaltyProgramAccrualRuleType)[keyof typeof LoyaltyProgramAccrualRuleType]
  | (string & {});

export const loyaltyProgramAccrualRuleTypeSchema: EnumSchema<LoyaltyProgramAccrualRuleType> =
  s.enumOf<LoyaltyProgramAccrualRuleType>(LoyaltyProgramAccrualRuleType);
