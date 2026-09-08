import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported timings when a pending change, as an action, takes place to a subscription. */
export const ChangeTiming = {
  /** The action occurs immediately. */
  Immediate: "IMMEDIATE",
  /** The action occurs at the end of the billing cycle. */
  EndOfBillingCycle: "END_OF_BILLING_CYCLE",
} as const;
export type ChangeTiming = (typeof ChangeTiming)[keyof typeof ChangeTiming] | (string & {});

export const changeTimingSchema: EnumSchema<ChangeTiming> = s.enumOf<ChangeTiming>(ChangeTiming);
