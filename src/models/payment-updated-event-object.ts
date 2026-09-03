import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";

export type PaymentUpdatedEventObject = {
  payment?: Payment;
};

export const paymentUpdatedEventObjectSchema: Schema<PaymentUpdatedEventObject> =
  s.object<PaymentUpdatedEventObject>({
    payment: s.optional(s.lazy(() => paymentSchema)),
  });
