import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramAccrualRuleTaxModeSchema,
  type LoyaltyProgramAccrualRuleTaxMode,
} from "./loyalty-program-accrual-rule-tax-mode.js";
import { moneySchema, type Money } from "./money.js";

export type LoyaltyProgramAccrualRuleVisitData = {
  minimumAmountMoney?: Money;
  taxMode: LoyaltyProgramAccrualRuleTaxMode;
};

export const loyaltyProgramAccrualRuleVisitDataSchema: Schema<LoyaltyProgramAccrualRuleVisitData> =
  s.object<LoyaltyProgramAccrualRuleVisitData>({
    minimumAmountMoney: s.optional(s.lazy(() => moneySchema)),
    taxMode: loyaltyProgramAccrualRuleTaxModeSchema,
    _keysMap: {
      minimumAmountMoney: "minimum_amount_money",
      taxMode: "tax_mode",
    },
  });
