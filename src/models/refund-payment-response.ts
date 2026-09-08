import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

/**
 * Defines the response returned by [RefundPayment](api-endpoint:Refunds-RefundPayment).
 *
 * If there are errors processing the request, the `refund` field might not be present, or it might
 * be present with a status of `FAILED`.
 */
export type RefundPaymentResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a refund of a payment made using Square. Contains information about the original
   * payment and the amount of money refunded.
   */
  refund?: PaymentRefund;
};

export const refundPaymentResponseSchema: Schema<RefundPaymentResponse> = s.object<RefundPaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  refund: s.optional(s.lazy(() => paymentRefundSchema)),
});
