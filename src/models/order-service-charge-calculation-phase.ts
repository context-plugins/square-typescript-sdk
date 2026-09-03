import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderServiceChargeCalculationPhase = {
  SubtotalPhase: "SUBTOTAL_PHASE",
  TotalPhase: "TOTAL_PHASE",
  ApportionedPercentagePhase: "APPORTIONED_PERCENTAGE_PHASE",
  ApportionedAmountPhase: "APPORTIONED_AMOUNT_PHASE",
} as const;
export type OrderServiceChargeCalculationPhase =
  | (typeof OrderServiceChargeCalculationPhase)[keyof typeof OrderServiceChargeCalculationPhase]
  | (string & {});

export const orderServiceChargeCalculationPhaseSchema: EnumSchema<OrderServiceChargeCalculationPhase> =
  s.enumOf<OrderServiceChargeCalculationPhase>(OrderServiceChargeCalculationPhase);
