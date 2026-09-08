import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

/** Defines the response returned by [GetPayment](api-endpoint:Payments-GetPayment). */
export type GetPaymentResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
};

export const getPaymentResponseSchema: Schema<GetPaymentResponse> = s.object<GetPaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payment: s.optional(s.lazy(() => paymentSchema)),
});
