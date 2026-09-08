import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

/**
 * Defines the response returned by [CreatePayment](api-endpoint:Payments-CreatePayment).
 *
 * If there are errors processing the request, the `payment` field might not be present, or it might
 * be present with a status of `FAILED`.
 */
export type CreatePaymentResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
};

export const createPaymentResponseSchema: Schema<CreatePaymentResponse> = s.object<CreatePaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payment: s.optional(s.lazy(() => paymentSchema)),
});
