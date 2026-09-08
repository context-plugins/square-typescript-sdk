import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payout status types */
export const PayoutStatus = {
  /** Indicates that the payout was successfully sent to the banking destination. */
  Sent: "SENT",
  /** Indicates that the payout was rejected by the banking destination. */
  Failed: "FAILED",
  /** Indicates that the payout has successfully completed. */
  Paid: "PAID",
} as const;
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus] | (string & {});

export const payoutStatusSchema: EnumSchema<PayoutStatus> = s.enumOf<PayoutStatus>(PayoutStatus);
