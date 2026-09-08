import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Represents a phase in the process of calculating order totals. Service charges are applied after
 * the indicated phase.
 *
 * [Read more about how order totals are
 * calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
 */
export const OrderServiceChargeCalculationPhase = {
  /** The service charge is applied after discounts, but before taxes. */
  SubtotalPhase: "SUBTOTAL_PHASE",
  /** The service charge is applied after all discounts and taxes are applied. */
  TotalPhase: "TOTAL_PHASE",
  /**
   * The service charge is calculated as a compounding adjustment after any discounts, but before
   * amount based apportioned service charges and any tax considerations.
   */
  ApportionedPercentagePhase: "APPORTIONED_PERCENTAGE_PHASE",
  /**
   * The service charge is calculated as a compounding adjustment after any discounts and percentage
   * based apportioned service charges, but before any tax considerations.
   */
  ApportionedAmountPhase: "APPORTIONED_AMOUNT_PHASE",
} as const;
export type OrderServiceChargeCalculationPhase =
  | (typeof OrderServiceChargeCalculationPhase)[keyof typeof OrderServiceChargeCalculationPhase]
  | (string & {});

export const orderServiceChargeCalculationPhaseSchema: EnumSchema<OrderServiceChargeCalculationPhase> =
  s.enumOf<OrderServiceChargeCalculationPhase>(OrderServiceChargeCalculationPhase);
