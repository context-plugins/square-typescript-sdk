import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the accrual rule that defines how buyers can earn points. */
export const LoyaltyProgramAccrualRuleType = {
  /**
   * A visit-based accrual rule. A buyer earns points for each visit. You can specify the minimum
   * purchase required.
   */
  Visit: "VISIT",
  /** A spend-based accrual rule. A buyer earns points based on the amount spent. */
  Spend: "SPEND",
  /**
   * An accrual rule based on an item variation. For example, accrue points for purchasing a coffee.
   */
  ItemVariation: "ITEM_VARIATION",
  /**
   * An accrual rule based on an item category. For example, accrue points for purchasing any item
   * in the "hot drink" category: coffee, tea, or hot cocoa.
   */
  Category: "CATEGORY",
} as const;
export type LoyaltyProgramAccrualRuleType =
  | (typeof LoyaltyProgramAccrualRuleType)[keyof typeof LoyaltyProgramAccrualRuleType]
  | (string & {});

export const loyaltyProgramAccrualRuleTypeSchema: EnumSchema<LoyaltyProgramAccrualRuleType> =
  s.enumOf<LoyaltyProgramAccrualRuleType>(LoyaltyProgramAccrualRuleType);
