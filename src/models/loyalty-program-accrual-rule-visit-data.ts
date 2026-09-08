import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramAccrualRuleTaxModeSchema,
  type LoyaltyProgramAccrualRuleTaxMode,
} from "./loyalty-program-accrual-rule-tax-mode.js";
import { moneySchema, type Money } from "./money.js";

/** Represents additional data for rules with the `VISIT` accrual type. */
export type LoyaltyProgramAccrualRuleVisitData = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  minimumAmountMoney?: Money;
  /**
   * Indicates how taxes should be treated when calculating the purchase amount used for loyalty
   * points accrual. This setting applies only to `SPEND` accrual rules or `VISIT` accrual rules
   * that have a minimum spend requirement.
   */
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
