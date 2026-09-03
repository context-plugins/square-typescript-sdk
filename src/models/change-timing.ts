import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChangeTiming = {
  Immediate: "IMMEDIATE",
  EndOfBillingCycle: "END_OF_BILLING_CYCLE",
} as const;
export type ChangeTiming = (typeof ChangeTiming)[keyof typeof ChangeTiming] | (string & {});

export const changeTimingSchema: EnumSchema<ChangeTiming> = s.enumOf<ChangeTiming>(ChangeTiming);
