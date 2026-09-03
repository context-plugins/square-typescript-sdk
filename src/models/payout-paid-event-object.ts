import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchema, type Payout } from "./payout.js";

export type PayoutPaidEventObject = {
  payout?: Payout;
};

export const payoutPaidEventObjectSchema: Schema<PayoutPaidEventObject> = s.object<PayoutPaidEventObject>({
  payout: s.optional(s.lazy(() => payoutSchema)),
});
