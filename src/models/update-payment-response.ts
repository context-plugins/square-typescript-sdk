import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

/** Defines the response returned by [UpdatePayment](api-endpoint:Payments-UpdatePayment). */
export type UpdatePaymentResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
};

export const updatePaymentResponseSchema: Schema<UpdatePaymentResponse> = s.object<UpdatePaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payment: s.optional(s.lazy(() => paymentSchema)),
});
