import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of payout: “BATCH” or “SIMPLE”. BATCH payouts include a list of payout entries that can
 * be considered settled. SIMPLE payouts do not have any payout entries associated with them and
 * will show up as one of the payout entries in a future BATCH payout.
 */
export const PayoutType = {
  /** Payouts that include a list of payout entries that can be considered settled. */
  Batch: "BATCH",
  /**
   * Payouts that do not have any payout entries associated with them and will show up as one of the
   * payout entries in a future BATCH payout.
   */
  Simple: "SIMPLE",
} as const;
export type PayoutType = (typeof PayoutType)[keyof typeof PayoutType] | (string & {});

export const payoutTypeSchema: EnumSchema<PayoutType> = s.enumOf<PayoutType>(PayoutType);
