import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type RefundUpdatedEventObject = {
  refund?: PaymentRefund;
};

export const refundUpdatedEventObjectSchema: Schema<RefundUpdatedEventObject> =
  s.object<RefundUpdatedEventObject>({
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
