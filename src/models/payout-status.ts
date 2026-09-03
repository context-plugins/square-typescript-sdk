import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutStatus = {
  Sent: "SENT",
  Failed: "FAILED",
  Paid: "PAID",
} as const;
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus] | (string & {});

export const payoutStatusSchema: EnumSchema<PayoutStatus> = s.enumOf<PayoutStatus>(PayoutStatus);
