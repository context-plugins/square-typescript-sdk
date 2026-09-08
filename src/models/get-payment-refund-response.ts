import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

/**
 * Defines the response returned by [GetRefund](api-endpoint:Refunds-GetPaymentRefund).
 *
 * Note: If there are errors processing the request, the refund field might not be present or it
 * might be present in a FAILED state.
 */
export type GetPaymentRefundResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a refund of a payment made using Square. Contains information about the original
   * payment and the amount of money refunded.
   */
  refund?: PaymentRefund;
};

export const getPaymentRefundResponseSchema: Schema<GetPaymentRefundResponse> =
  s.object<GetPaymentRefundResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
