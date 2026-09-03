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

export type LoyaltyProgramAccrualRule = {
  accrualType: LoyaltyProgramAccrualRuleType;
  points?: number | null;
  visitData?: LoyaltyProgramAccrualRuleVisitData;
  spendData?: LoyaltyProgramAccrualRuleSpendData;
  itemVariationData?: LoyaltyProgramAccrualRuleItemVariationData;
  categoryData?: LoyaltyProgramAccrualRuleCategoryData;
};

export const loyaltyProgramAccrualRuleSchema: Schema<LoyaltyProgramAccrualRule> =
  s.object<LoyaltyProgramAccrualRule>({
    accrualType: loyaltyProgramAccrualRuleTypeSchema,
    points: s.optionalNullable(s.number()),
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
