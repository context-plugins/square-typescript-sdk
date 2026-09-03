import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutType = {
  Batch: "BATCH",
  Simple: "SIMPLE",
} as const;
export type PayoutType = (typeof PayoutType)[keyof typeof PayoutType] | (string & {});

export const payoutTypeSchema: EnumSchema<PayoutType> = s.enumOf<PayoutType>(PayoutType);
