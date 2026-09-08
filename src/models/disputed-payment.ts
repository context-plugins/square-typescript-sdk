import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The payment the cardholder disputed. */
export type DisputedPayment = {
  /** Square-generated unique ID of the payment being disputed. */
  paymentId?: string | null;
};

export const disputedPaymentSchema: Schema<DisputedPayment> = s.object<DisputedPayment>({
  paymentId: s.optionalNullable(s.string()),
  _keysMap: {
    paymentId: "payment_id",
  },
});
