import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchema, type Payout } from "./payout.js";

export type PayoutFailedEventObject = {
  payout?: Payout;
};

export const payoutFailedEventObjectSchema: Schema<PayoutFailedEventObject> =
  s.object<PayoutFailedEventObject>({
    payout: s.optional(s.lazy(() => payoutSchema)),
  });
