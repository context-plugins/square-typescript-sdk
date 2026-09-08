import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type RefundUpdatedEventObject = {
  /**
   * Represents a refund of a payment made using Square. Contains information about the original
   * payment and the amount of money refunded.
   */
  refund?: PaymentRefund;
};

export const refundUpdatedEventObjectSchema: Schema<RefundUpdatedEventObject> =
  s.object<RefundUpdatedEventObject>({
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
