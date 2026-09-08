import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type RefundCreatedEventObject = {
  /**
   * Represents a refund of a payment made using Square. Contains information about the original
   * payment and the amount of money refunded.
   */
  refund?: PaymentRefund;
};

export const refundCreatedEventObjectSchema: Schema<RefundCreatedEventObject> =
  s.object<RefundCreatedEventObject>({
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
