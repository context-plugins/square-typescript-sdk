import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type RefundCreatedEventObject = {
  refund?: PaymentRefund;
};

export const refundCreatedEventObjectSchema: Schema<RefundCreatedEventObject> =
  s.object<RefundCreatedEventObject>({
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
