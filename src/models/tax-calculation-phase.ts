import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxCalculationPhase = {
  TaxSubtotalPhase: "TAX_SUBTOTAL_PHASE",
  TaxTotalPhase: "TAX_TOTAL_PHASE",
} as const;
export type TaxCalculationPhase =
  | (typeof TaxCalculationPhase)[keyof typeof TaxCalculationPhase]
  | (string & {});

export const taxCalculationPhaseSchema: EnumSchema<TaxCalculationPhase> =
  s.enumOf<TaxCalculationPhase>(TaxCalculationPhase);
