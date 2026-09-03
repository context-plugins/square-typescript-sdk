import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisputedPayment = {
  paymentId?: string | null;
};

export const disputedPaymentSchema: Schema<DisputedPayment> = s.object<DisputedPayment>({
  paymentId: s.optionalNullable(s.string()),
  _keysMap: {
    paymentId: "payment_id",
  },
});
