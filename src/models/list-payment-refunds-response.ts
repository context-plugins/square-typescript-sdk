import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentRefundSchema, type PaymentRefund } from "./payment-refund.js";

export type ListPaymentRefundsResponse = {
  errors?: Error[];
  refunds?: PaymentRefund[];
  cursor?: string;
};

export const listPaymentRefundsResponseSchema: Schema<ListPaymentRefundsResponse> =
  s.object<ListPaymentRefundsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    refunds: s.optional(s.array(s.lazy(() => paymentRefundSchema))),
    cursor: s.optional(s.string()),
  });
