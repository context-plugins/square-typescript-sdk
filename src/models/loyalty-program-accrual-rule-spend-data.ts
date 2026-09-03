import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramAccrualRuleTaxModeSchema,
  type LoyaltyProgramAccrualRuleTaxMode,
} from "./loyalty-program-accrual-rule-tax-mode.js";
import { moneySchema, type Money } from "./money.js";

export type LoyaltyProgramAccrualRuleSpendData = {
  amountMoney: Money;
  excludedCategoryIds?: string[] | null;
  excludedItemVariationIds?: string[] | null;
  taxMode: LoyaltyProgramAccrualRuleTaxMode;
};

export const loyaltyProgramAccrualRuleSpendDataSchema: Schema<LoyaltyProgramAccrualRuleSpendData> =
  s.object<LoyaltyProgramAccrualRuleSpendData>({
    amountMoney: moneySchema,
    excludedCategoryIds: s.optionalNullable(s.array(s.string())),
    excludedItemVariationIds: s.optionalNullable(s.array(s.string())),
    taxMode: loyaltyProgramAccrualRuleTaxModeSchema,
    _keysMap: {
      amountMoney: "amount_money",
      excludedCategoryIds: "excluded_category_ids",
      excludedItemVariationIds: "excluded_item_variation_ids",
      taxMode: "tax_mode",
    },
  });
