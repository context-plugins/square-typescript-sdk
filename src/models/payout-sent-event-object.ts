import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchema, type Payout } from "./payout.js";

export type PayoutSentEventObject = {
  payout?: Payout;
};

export const payoutSentEventObjectSchema: Schema<PayoutSentEventObject> = s.object<PayoutSentEventObject>({
  payout: s.optional(s.lazy(() => payoutSchema)),
});
