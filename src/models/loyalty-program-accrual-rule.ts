import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramAccrualRuleCategoryDataSchema,
  type LoyaltyProgramAccrualRuleCategoryData,
} from "./loyalty-program-accrual-rule-category-data.js";
import {
  loyaltyProgramAccrualRuleItemVariationDataSchema,
  type LoyaltyProgramAccrualRuleItemVariationData,
} from "./loyalty-program-accrual-rule-item-variation-data.js";
import {
  loyaltyProgramAccrualRuleSpendDataSchema,
  type LoyaltyProgramAccrualRuleSpendData,
} from "./loyalty-program-accrual-rule-spend-data.js";
import {
  loyaltyProgramAccrualRuleTypeSchema,
  type LoyaltyProgramAccrualRuleType,
} from "./loyalty-program-accrual-rule-type.js";
import {
  loyaltyProgramAccrualRuleVisitDataSchema,
  type LoyaltyProgramAccrualRuleVisitData,
} from "./loyalty-program-accrual-rule-visit-data.js";

/**
 * Represents an accrual rule, which defines how buyers can earn points from the base [loyalty
 * program](entity:LoyaltyProgram).
 */
export type LoyaltyProgramAccrualRule = {
  /** The type of the accrual rule that defines how buyers can earn points. */
  accrualType: LoyaltyProgramAccrualRuleType;
  /** The number of points that buyers earn based on the `accrual_type`. */
  points?: number | null;
  /** Represents additional data for rules with the `VISIT` accrual type. */
  visitData?: LoyaltyProgramAccrualRuleVisitData;
  /** Represents additional data for rules with the `SPEND` accrual type. */
  spendData?: LoyaltyProgramAccrualRuleSpendData;
  /** Represents additional data for rules with the `ITEM_VARIATION` accrual type. */
  itemVariationData?: LoyaltyProgramAccrualRuleItemVariationData;
  /** Represents additional data for rules with the `CATEGORY` accrual type. */
  categoryData?: LoyaltyProgramAccrualRuleCategoryData;
};

export const loyaltyProgramAccrualRuleSchema: Schema<LoyaltyProgramAccrualRule> =
  s.object<LoyaltyProgramAccrualRule>({
    accrualType: loyaltyProgramAccrualRuleTypeSchema,
    points: s.optionalNullable(s.int()),
    visitData: s.optional(s.lazy(() => loyaltyProgramAccrualRuleVisitDataSchema)),
    spendData: s.optional(s.lazy(() => loyaltyProgramAccrualRuleSpendDataSchema)),
    itemVariationData: s.optional(s.lazy(() => loyaltyProgramAccrualRuleItemVariationDataSchema)),
    categoryData: s.optional(s.lazy(() => loyaltyProgramAccrualRuleCategoryDataSchema)),
    _keysMap: {
      accrualType: "accrual_type",
      visitData: "visit_data",
      spendData: "spend_data",
      itemVariationData: "item_variation_data",
      categoryData: "category_data",
    },
  });
