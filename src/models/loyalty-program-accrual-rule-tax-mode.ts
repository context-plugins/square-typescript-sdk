import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyProgramAccrualRuleTaxMode = {
  BeforeTax: "BEFORE_TAX",
  AfterTax: "AFTER_TAX",
} as const;
export type LoyaltyProgramAccrualRuleTaxMode =
  | (typeof LoyaltyProgramAccrualRuleTaxMode)[keyof typeof LoyaltyProgramAccrualRuleTaxMode]
  | (string & {});

export const loyaltyProgramAccrualRuleTaxModeSchema: EnumSchema<LoyaltyProgramAccrualRuleTaxMode> =
  s.enumOf<LoyaltyProgramAccrualRuleTaxMode>(LoyaltyProgramAccrualRuleTaxMode);
