import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

export type UpdatePaymentResponse = {
  errors?: Error[];
  payment?: Payment;
};

export const updatePaymentResponseSchema: Schema<UpdatePaymentResponse> = s.object<UpdatePaymentResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payment: s.optional(s.lazy(() => paymentSchema)),
});
