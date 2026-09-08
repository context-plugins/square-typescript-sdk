import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSchema, type Payment } from "./payment.js";

export type PaymentCreatedEventObject = {
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
};

export const paymentCreatedEventObjectSchema: Schema<PaymentCreatedEventObject> =
  s.object<PaymentCreatedEventObject>({
    payment: s.optional(s.lazy(() => paymentSchema)),
  });
