import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";

export type UpdatePaymentRequest = {
  payment?: Payment;
  idempotencyKey: string;
};

export const updatePaymentRequestSchema: Schema<UpdatePaymentRequest> = s.object<UpdatePaymentRequest>({
  payment: s.optional(s.lazy(() => paymentSchema)),
  idempotencyKey: s.string(),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
