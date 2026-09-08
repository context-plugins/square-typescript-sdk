import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how taxes should be treated when calculating the purchase amount used for loyalty
 * points accrual. This setting applies only to `SPEND` accrual rules or `VISIT` accrual rules that
 * have a minimum spend requirement.
 */
export const LoyaltyProgramAccrualRuleTaxMode = {
  /** Exclude taxes from the purchase amount used for loyalty points accrual. */
  BeforeTax: "BEFORE_TAX",
  /** Include taxes in the purchase amount used for loyalty points accrual. */
  AfterTax: "AFTER_TAX",
} as const;
export type LoyaltyProgramAccrualRuleTaxMode =
  | (typeof LoyaltyProgramAccrualRuleTaxMode)[keyof typeof LoyaltyProgramAccrualRuleTaxMode]
  | (string & {});

export const loyaltyProgramAccrualRuleTaxModeSchema: EnumSchema<LoyaltyProgramAccrualRuleTaxMode> =
  s.enumOf<LoyaltyProgramAccrualRuleTaxMode>(LoyaltyProgramAccrualRuleTaxMode);
