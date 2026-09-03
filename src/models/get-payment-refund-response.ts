import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type GetPaymentRefundResponse = {
  errors?: Error[];
  refund?: PaymentRefund;
};

export const getPaymentRefundResponseSchema: Schema<GetPaymentRefundResponse> =
  s.object<GetPaymentRefundResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refund: s.optional(s.lazy(() => paymentRefundSchema)),
  });
