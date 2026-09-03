import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type RefundPaymentResponse = {
  errors?: Error[];
  refund?: PaymentRefund;
};

export const refundPaymentResponseSchema: Schema<RefundPaymentResponse> = s.object<RefundPaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  refund: s.optional(s.lazy(() => paymentRefundSchema)),
});
