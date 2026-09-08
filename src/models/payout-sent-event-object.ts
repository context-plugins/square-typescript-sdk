import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchema, type Payout } from "./payout.js";

export type PayoutSentEventObject = {
  /**
   * An accounting of the amount owed the seller and record of the actual transfer to their external
   * bank account or to the Square balance.
   */
  payout?: Payout;
};

export const payoutSentEventObjectSchema: Schema<PayoutSentEventObject> = s.object<PayoutSentEventObject>({
  payout: s.optional(s.lazy(() => payoutSchema)),
});
