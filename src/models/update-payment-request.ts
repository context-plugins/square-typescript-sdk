import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";

/**
 * Describes a request to update a payment using
 * [UpdatePayment](api-endpoint:Payments-UpdatePayment).
 */
export type UpdatePaymentRequest = {
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
  /**
   * A unique string that identifies this `UpdatePayment` request. Keys can be any valid string but
   * must be unique for every `UpdatePayment` request.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
};

export const updatePaymentRequestSchema: Schema<UpdatePaymentRequest> = s.object<UpdatePaymentRequest>({
  payment: s.optional(s.lazy(() => paymentSchema)),
  idempotencyKey: s.string(),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
