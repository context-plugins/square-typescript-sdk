import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When to calculate the taxes due on a cart. */
export const TaxCalculationPhase = {
  /** The fee is calculated based on the payment's subtotal. */
  TaxSubtotalPhase: "TAX_SUBTOTAL_PHASE",
  /** The fee is calculated based on the payment's total. */
  TaxTotalPhase: "TAX_TOTAL_PHASE",
} as const;
export type TaxCalculationPhase =
  | (typeof TaxCalculationPhase)[keyof typeof TaxCalculationPhase]
  | (string & {});

export const taxCalculationPhaseSchema: EnumSchema<TaxCalculationPhase> =
  s.enumOf<TaxCalculationPhase>(TaxCalculationPhase);
