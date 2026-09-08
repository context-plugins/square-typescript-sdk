import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchema, type Payout } from "./payout.js";

export type PayoutPaidEventObject = {
  /**
   * An accounting of the amount owed the seller and record of the actual transfer to their external
   * bank account or to the Square balance.
   */
  payout?: Payout;
};

export const payoutPaidEventObjectSchema: Schema<PayoutPaidEventObject> = s.object<PayoutPaidEventObject>({
  payout: s.optional(s.lazy(() => payoutSchema)),
});
