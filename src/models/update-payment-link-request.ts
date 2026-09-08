import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type UpdatePaymentLinkRequest = {
  paymentLink: PaymentLink;
};

export const updatePaymentLinkRequestSchema: Schema<UpdatePaymentLinkRequest> =
  s.object<UpdatePaymentLinkRequest>({
    paymentLink: paymentLinkSchema,
    _keysMap: {
      paymentLink: "payment_link",
    },
  });
